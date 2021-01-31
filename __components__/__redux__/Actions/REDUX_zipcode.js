import { rootstore } from store.js
import { createAction } from '@reduxjs/toolkit'


export function dispatchZipcode( input ){

    const zipcodeDispatch = {
        type: 'zipcodeDispatch',
        payload: input, 
      }
    rootstore.dispatch(zipcodeDispatch);
      
}

export function getZipcode(){
  var state = rootstore.getState().zipcode;

  return String(state);
}