import * as Location from 'expo-location'
import { Alert } from 'react-native';
import { dispatchStoreLocation } from '../__redux__/Actions/REDUX_location';


/**
 * @brief Attaches a location listener that if permissions are granted updates the Redux store with the users location every half second
 * @returns Returns a promise that will resolve to an object containing the cleanup function for this listener
 */
export const locationListener = async()=>{
    const response = await Location.requestForegroundPermissionsAsync();
    if(response.status!='granted'){
        Alert.alert("Without Permission to access your location, our map features will not work. Please enable location permissions in settings.");
        return;
    }
    const cleanup = Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.High
        },
        (LocationObject)=>{
            //dispatch it to redux store here
            dispatchStoreLocation(LocationObject);
        },
    );
    return cleanup; //TODO: get cleanup function working
}