export function mapPinsReducer(state, action){
    if (action.type == 'mapPinsDispatch'){
        return action.payload;
    }
}