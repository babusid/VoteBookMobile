import {rootStore} from '../store.js'
import { ArrayThrowException } from '../../../__error'

/**
 * 
 * @brief This function is what is called to dispatch the array of map pins to our store
 * @param {Array} input The Array of Objects that are the pins for the map
 * 
 */
export function dispatchMapPins( input ){
    if (!Array.isArray(input)){
        throw ArrayThrowException;
    };
    const mapPinsDispatch = {
        type: 'mapPinsDispatch',
        payload: input
    };
    rootStore.dispatch(mapPinsDispatch);
}

/**
 * @brief This function retrieves and returns the stored array of map pins
 * @returns {Array} Returns an array of JSON objects
 */
export function getMapPins(){
    var state = rootStore.getState().mapPins;
    return (state)
}
