import * as Location from 'expo-location'
import { Alert } from 'react-native';


/**
 * @brief Attaches a location listener that if permissions are granted updates the Redux store with the users location every half second
 * @returns {Function} cleanup function
 */
export const locationListener = ()=>{
    const status = await Location.requestForegroundPermissionsAsync();
    if(status!='granted'){
        Alert.alert("Without Permission to access your location, our map features will not work. Please enable location permissions in settings.");
        return;
    }
    const cleanup = Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.High,
            timeInterval:500,
            distanceInterval:20,
        },
        (LocationObject)=>{
            //dispatch it to redux store here
        },
    );
    cleanup.then((resolve)=>{
        return resolve.remove;
    });
}