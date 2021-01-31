import { rootStore } from '../store.js'
import { createAction } from '@reduxjs/toolkit'


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