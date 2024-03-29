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

/**
 * @brief This function attaches a listener to the map pins array portion of our redux store, and calls a provided function on the array each time a listener event occurs.
 * @param {Function} eventHandler A callback function to call on the stored map pins every time the listener detects an event. AKA when event detected,
 *  eventHandler([..]) with the array of map pins that is stored
 * @returns {import('redux').Unsubscribe} A cleanup function to remove the listener
 */
export function listenMapPins(eventHandler){
    const __listenmappins = () => {
        var data = getMapPins();
        eventHandler(data);
    };
    const unsub = rootStore.subscribe(__listenmappins);
    return unsub;
}

/**
 * @brief This function is meant to push the key value of a marker (from mapmarkers.js) to the redux store
 * @param {String} pushID
 */
 export function dispatchPushId(pushID){
    const disp = {
        type:"waitTimeReportID",
        payload: pushID
    }
    rootStore.dispatch(disp);
}
/**
 * @brief This functions gets the pushID of the marker that was pressed from the redux store
 * @returns {String} pushId
 */
export function getPushId(){
    return rootStore.getState().pushID;
}