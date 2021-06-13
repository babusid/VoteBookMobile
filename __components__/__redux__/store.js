import { createStore } from "redux"
import { zipcodeReducer } from './Reducers/zipcodeReducer'
import { mapPinsReducer } from "./Reducers/mapPinsReducer"
import { persistStore, persistCombineReducers } from "redux-persist";
import createSecureStore from "redux-persist-expo-securestore";

 

/**
 * @brief This function is the Root Reducer for our Redux Store.
 * All individual reducers  (for each action type that we have to handle)
 * must be linked into this reducer. Each reducer should be linked to the root reducer 
 * by adding a field to the returned JSON object in the form of **"substatename: substatereducer".**
 */

function rootReducer(state, action){
    return (
        {
            zipcode: zipcodeReducer(state.zipcode, action),
            mapPins:mapPinsReducer(state.mapPins,action)
        }
    )
}

const storage = createSecureStore();
const config = {
  key: "root_VB*!?",
  storage,
};

const persistedReducer = persistReducer(config,rootReducer);

/**
 * @type {import("redux").Store}
 */
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export const rootStore = {
  store: store,
  persistor: persistor,
}
