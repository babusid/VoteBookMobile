import {rootStore} from '../store.js'
import { ArrayThrowException } from '../../../__error'

/**
 * 
 * @brief This function is what is called to dispatch the array of map pins to our store
 * @param {Array} input The Array of Objects that are the pins for the map
 * 
 */
export function dispatchMapPins( input ){
    persistor.pause(); 
    if (!Array.isArray(input)){
        throw ArrayThrowException;
    };
    const mapPinsDispatch = {
        type: 'mapPinsDispatch',
        payload: input
    };
    rootStore.store.dispatch(mapPinsDispatch);
    persistor.persist(); 
}

/**
 * @brief This function retrieves and returns the stored array of map pins
 */
export function getMapPins(){
    var state = rootStore.getState().mapPins;
    if (state==undefined){
        throw null;
    }
    else{
        return (state);
    }
}
