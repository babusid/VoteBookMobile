import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { dispatchPushId, listenMapPins } from '../__redux__/Actions/REDUX_mapPins.js';
import { useNavigation} from '@react-navigation/native';
import {getStoredLocation} from '../__redux__/Actions/REDUX_location'
import { Alert } from 'react-native';

let timeOut = 1;

/**
 * @brief Calculates Distance given two coordinate pairs
 * @param {Number} lat1 Latitude one
 * @param {Number} lon1 Longitude one
 * @param {Number} lat2 Latitude two
 * @param {Number} lon2 Longitude two
 * @param {String} unit K for kilometers, N for nautical miles, m for meters, the default is miles
 * @returns {Number} 
 */
const distance = (lat1, lon1, lat2, lon2, unit) => { 
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return(0);
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit==="K") { dist = dist * 1.609344 }
    if (unit==="N") { dist = dist * 0.8684 }
    if (unit==="m") { dist = dist * 1609.344}
    return(dist);
  }
}


/**
 * @brief This function is the onpress function for the callouts. It performs the geofencing and the report cooldown.
 * @param {Number} markerLat 
 * @param {Numer} markerLon 
 * @returns {Boolean} if true, passed the protections, if false, failed the protections
 */
const calloutPressFunc = (markerLat, markerLon) => {
  const userLoc = getStoredLocation(); //Location listener that is updating the redux store will have already been attached in App.js
  const dist = distance(
      userLoc.coords.latitude,
      userLoc.coords.longitude,
      markerLat,
      markerLon
  );

  if (dist >=  0.25){ //Pin is too far away
    Alert.alert("You are not close enough to this pin to register a report. Please only report for pins that you are close to.");
    return false;
  }
  //Cooldown protection architecture here
  if (!timeOut){
    //we are in cooldown time
    Alert.alert("You have already reported recently, please wait a few moments before reporting again. Thank you for your patience.");
    return false;
  }
  timeOut = 0;
  setTimeout(()=>{ //async timer function that will reset the timeOut back to a cooldown finished state after thirty seconds
    timeOut = 1;
    console.log("ready");
  },(30*1000));
  return true;
}

/**
 * @brief Renders Markers (from React-native-maps) depending on what we have stored in our redux store. 
 * This redux store state is updated by our Firebase Listener Component/Location Listener component.
 * The Firebase listener component gets the pins, and the location listener gets the user's location.
 */
export const MapMarkers = ()=>{
  //should listen to the redux store here (the getMapPins needs to be listened to )  
  const navigation = useNavigation();
  let [markers, updateMarkers] = useState([]);
  useEffect(()=>{
    const listener = listenMapPins(updateMarkers); //attach the map pins listener to the state variable so that it re-renders when the map pins change
    return function unsub(){
      listener();
    }
  })
  return(
      markers.map(
          (marker) => 
              <Marker
                  key={marker.siteID}
                  coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
              >
                <Callout 
                  onPress={() =>{
                    if(calloutPressFunc(parseFloat(marker.latitude),parseFloat(marker.longitude))){
                      dispatchPushId(`${marker.siteID}`);
                      navigation.navigate("Report Wait Time");
                    }
                }}>
                  <Text style={styles.title}>{marker.title}</Text>
                  <Text>Wait Time: {marker.waitTime} Hours</Text>
                  <Button title={"Report Wait Time"}/>
                </Callout>
              </Marker>
          
      )
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    textAlignVertical: "top",
  },
  button:{
    margin: 10,
    padding: 10,
    width: 100,
    height: 100,
  }
})