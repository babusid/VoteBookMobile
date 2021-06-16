/**
 * @brief This reducer will take actions of type *locationUpdate* and update the portion of the state tree
 * with whatever payload they contain
 * @param {import("expo-location").LocationObject} state Stored location state
 * @param {Object} action dispatched action
 */
export const locationReducer = (state, action)=> {
    if (action.type!="locationUpdate"){
        return state;
    }
    return action.payload;
}