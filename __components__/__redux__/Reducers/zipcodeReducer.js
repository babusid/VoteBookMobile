
/**
 * 
 * @brief this function takes the dispatched state from the previous action file and checks if it is of type zipcodeDispatch.
 * If this is true, it returns the payload of the action, which in this isntance would be the zipcode. 
 * @param {Int} state zipcode portion of state
 * @param {Object} action action that is dispatched to the state
 */
export function zipcodeReducer(state, action){
if (action.type == 'zipcodeDispatch'){
    return action.payload;
}

}