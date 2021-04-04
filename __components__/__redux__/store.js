import { createStore, applyMiddleware } from "redux"
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

/**
 * @brief This persists the current root reducer. It configures the persistence as being the persistence secure storage for 
 * root reducer. Then, it creates a root reducer variable that is assigned the most recent zipcode and map pin information from
 * the root reducer. Lastly, it configures this new store in a function that packages this information to be "exported".
 * 
 */

const storage = createSecureStore();

 const config = {
    key: "root_VB*!?",
    storage
  };
  
  const rootReducerPersist = persistCombineReducers(config, rootReducer);
  
  function configureStore() {
    const store = createStore(rootReducerPersist);
    const persistor = persistStore(store); //TO DO: LINK UNUSED PERSISTSTORE CALLBACK FUNCTIONALITY TO RENDERING APP
    return { persistor, store };
  }
/**
 * @brief This function is a debug function that will log the output of every dispatched action
 * and the state of the redux store after each dispatched action. 
 */
function reduxLogger({ getState }){
    return next => action => {
        console.log('will dispatch', action)
        const returnValue = next(action)
        console.log('state after dispatch', getState())
        return returnValue
      }
}

/**
 * @brief This is the root store of our application, that should be imported into every file that requires dealing with the state.
 * The root reducer of this store is contained in store.js, and each reducer written for specific state actions must be linked into the root reducer.
 */
export const rootStore = configureStore();