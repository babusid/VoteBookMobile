import {rootStore} from '../store.js'
import { ArrayThrowException } from '../../../__error'

export function dispatchMapPins( input ){
    if (!Array.isArray(input)){
        throw ArrayThrowException;
    };
    const mapPinsDispatch = {
        type: 'mapPinsDispatch',
        payload: input
    };
    rootStore.dispatch(mapPinsDispatch);
}
export function getMapPins(){
    var state = rootStore.getState().mapPins;
    return (state)
}
