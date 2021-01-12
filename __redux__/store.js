import { createStore, applyMiddleware } from "redux"

/**
 * @brief This function is the Root Reducer for our Redux Store.
 * All individual reducers  (for each action type that we have to handle)
 * must be linked into this reducer. Each reducer should be linked to the root reducer 
 * by adding a field to the returned JSON object in the form of **"substatename: substatereducer".**
 */
function rootReducer(){
    return (
        {

        }
    )
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
 */
const rootStore = createStore(rootReducer, {}, /*applyMiddleware(reduxLogger)*/)