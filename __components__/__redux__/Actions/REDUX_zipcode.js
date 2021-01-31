import { rootStore } from '../store.js'
<<<<<<< HEAD

=======
import { createAction } from '@reduxjs/toolkit'
>>>>>>> 891a74e6e2cd879887924ca3f6c5f40bb2c629be


export function dispatchZipcode( input ){

    const zipcodeDispatch = {
        type: 'zipcodeDispatch',
        payload: input, 
      }
<<<<<<< HEAD
    rootStore.dispatch(zipcodeDispatch);
      
=======
    rootStore.dispatch(zipcodeDispatch);   
>>>>>>> 891a74e6e2cd879887924ca3f6c5f40bb2c629be
}

export function getZipcode(){
  var state = rootStore.getState().zipcode;

  return String(state);
}