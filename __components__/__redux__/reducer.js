import { rootstore, rootReducer } from store.js



export function zipcodeReducer(state, action){
if (typeof state === 'undefined'){
    state = 0;
}
else {
 rootReducer(state, action);
}

}