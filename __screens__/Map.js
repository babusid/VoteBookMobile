import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { FirebaseMapListener } from '../__components__/__JScomponents__/firebaseListener';
import {MapMarkers} from '../__components__/__reactComponents__/mapMarkers';
import {getStoredLocation} from '../__components__/__redux__/Actions/REDUX_location'


export default function MapScreen(){
    const initReg = getStoredLocation();
    const netinfo = useNetInfo();
    useEffect(()=>{ //setup the firebase listener. TODO: configure to return the cleanup function for the firebase listener
        const listener = FirebaseMapListener(netinfo); //create listener when mapscreen renders
        return function unsub(){
            listener();
        }
    })
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                showsUserLocation={true} 
                showsMyLocationButton={true} 
                showsCompass={true} 
                initialRegion = {
                    { latitudeDelta: 0.5,
                      longitudeDelta: 0.2, 
                      latitude: initReg.coords.latitude, 
                      longitude: initReg.coords.longitude
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