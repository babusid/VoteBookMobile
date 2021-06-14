import { rootStore } from "../store";

/**
 * @brief this constructor will return the action object to dispatch that will get handled by the reducer
 */
export const reduxLocationType = (__payload) => {
    this.type = "locationUpdate";
    this.payload = __payload;
}

/**
 * @brief Dispatches the provided  location object to our redux store
 * @param {import("expo-location").LocationObject} Loc
 */
export const dispatchStoreLocation = (Loc) => {
    const disp = new reduxLocationType(Loc);
    rootStore.dispatch(disp);
}

/**
 * @brief Retrieves the stored location in our redux store
 * @returns {import("expo-location").LocationObject} 
 */
export const getStoredLocation = ()=>{
    return rootStore.getState().userLocation;
}
/**
 * @brief Attaches a listener to the user location portion of our redux store, and runs the eventhandler callback on the stored location everytime there is an update.
 * @param {Function} eventhandler CallBack funciton to run on the stored user location everytime the redux store updates
 * @returns {Function} Cleanup function to unsubscribe to listener 
 */
export const listenUserLocation = (eventhandler) => {
    const __listenuserlocation = () =>{
        let loc = getUserLocation();
        eventhandler(loc);
    }
    const sub = rootStore.subscribe(__listenuserlocation);
    return sub;
}