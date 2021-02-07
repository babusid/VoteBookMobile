/**
 * @brief This reducer is linked into the root reducer to handle the implementation of the mapPins action into the state tree 
 * @param {Array} state This should be the mapPins portion of the root State
 * @param {Object} action This is the action that is passed into the rootreducer when any action is dispatched to the root store
 */
export function mapPinsReducer(state, action){
    if (action.type == 'mapPinsDispatch'){
        return action.payload;
    }
}