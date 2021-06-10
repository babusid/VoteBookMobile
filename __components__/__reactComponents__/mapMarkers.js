import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { getMapPins } from '../__redux__/Actions/REDUX_mapPins.js';

export const MapMarkers=(props)=>{
    //var markers = getMapPins();
    var markers = [{title:"Location 1", latitude: 1, longitude: 2, siteID:0, waitTime:1},{title:"Location 2", latitude: 2, longitude:1,siteID:1, waitTime: 1.5}];
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
            (marker) => {
                <Marker
                    key={marker.siteID}
                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                >
                  <Callout>
                    <Text style={styles.title}>{marker.title}</Text>
                    <Text>Wait Time: {marker.waitTime} Hours</Text>
                    <Button title={"Report Wait Time"}/>
                  </Callout>
                </Marker>
            }
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