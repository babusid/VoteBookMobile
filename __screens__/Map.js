import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { FirebaseDataSnapshot } from '../__components__/__reactComponents__/firebaseListener';
import {MapMarkers} from '../__components__/__reactComponents__/mapMarkers';


export default function MapScreen(){
    const netinfo = useNetInfo();
    useEffect(()=>{ //setup the firebase listener and return the cleanup function
        let cleanup = FirebaseDataSnapshot(netinfo);
        return cleanup();
    })
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                showsUserLocation={true} 
                showsMyLocationButton={true} 
                showsCompass={true} 
                initialRegion = {
                    { latitudeDelta: 0.922,
                      longitudeDelta: 0.421, 
                      latitude: 0, 
                      longitude: 0
                      // TO-DO: wire latitude and longitude to the location 
                      // of the phone to center map at user's location
                    }} 
                showsTraffic = {true}
            >
                <MapMarkers/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        padding: 15,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});