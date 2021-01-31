import { rootstore, rootReducer } from store.js



export function zipcodeReducer(state, action){
if (action.type == 'zipcodeDispatch'){
    return action.payload;
}

}