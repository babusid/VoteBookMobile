import { rootStore } from '../store.js'
import { createAction } from '@reduxjs/toolkit'

/**
 * 
 * @brief this function essentially takes in the input given from someone that is on the app. After that it uses 
 * the input to create a "state" of the data, AKA, what the current zipcode is. After this is defined, it exports
 * it to the rootStore and stores it.
 */
export function dispatchZipcode( input ){

    const zipcodeDispatch = {
        type: 'zipcodeDispatch',
        payload: input, 
      }
    rootStore.dispatch(zipcodeDispatch);   
}

/**
 * @brief this function essentially just returns the zipcode that has been inputed. It takes the data from the rootstore
 * and returns it in a string.
 */
export function getZipcode(){
  var state = rootStore.getState().zipcode;

  return String(state);
}