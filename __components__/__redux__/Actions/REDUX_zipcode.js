import { rootStore } from '../store.js'
import { createAction } from '@reduxjs/toolkit'

/**
 * 
 * @brief this function essentially takes in the input given from someone that is on the app. After that it uses 
 * the input to create a "state" of the data, AKA, what the current zipcode is. After this is defined, it exports
 */
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