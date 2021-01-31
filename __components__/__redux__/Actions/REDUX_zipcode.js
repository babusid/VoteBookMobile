import { rootStore } from '../store.js'



export function dispatchZipcode( input ){

    const zipcodeDispatch = {
        type: 'zipcodeDispatch',
        payload: input, 
      }
    rootStore.dispatch(zipcodeDispatch);
      
}

export function getZipcode(){
  var state = rootStore.getState().zipcode;

  return String(state);
}