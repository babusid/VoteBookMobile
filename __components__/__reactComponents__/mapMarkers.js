import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { dispatchPushId, listenMapPins } from '../__redux__/Actions/REDUX_mapPins.js';
import { useNavigation} from '@react-navigation/native';


/**
 * @brief Renders Markers (from React-native-maps) depending on what we have stored in our redux store. This redux store state is updated by our Firebase Listener Component.
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
  const distance = (lat1, lon1, lat2, lon2, unit) => { //calculates distance given two coordinate pairs
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
  return(
      markers.map(
          (marker) => 
              <Marker
                  key={marker.siteID}
                  coordinate={{ latitude: parseInt(marker.latitude), longitude: parseInt(marker.longitude) }}
              >
                <Callout 
                  onPress={() =>{
                    dispatchPushId(marker.siteID);
                    navigation.navigate("Report Wait Time");
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