/**
 * @brief This reducer handles the pushID of every marker. When dispatchPushID is used, this reducer will store whatever id it sent to the state tree.
 * @param {String} state 
 * @param {Object} action 
 */
export const pushID_Reducer = (state, action) =>{
    if (action.type == "waitTimeReportID"){
        return action.payload;
    } 
    return state;
}