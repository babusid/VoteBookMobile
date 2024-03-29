import { rootStore } from '../store.js'
import { createAction } from '@reduxjs/toolkit'
import {IntThrowException,zipCodeLengthException} from '../../../__error'


/**
 * 
 * @brief this function essentially takes in the input given from someone that is on the app. After that it uses 
 * the input to create a "state" of the data, AKA, what the current zipcode is. After this is defined, it exports
 * it to the rootStore and stores it.
 * @param {Number} input Zipcode as an 5 digit integer
 * @throws TypeError if input is not int
 * @throws RangeError if input is not 5 digits 
 */
export function dispatchZipcode( input ){
  if (!Number.isInteger(input)){
    throw TypeError;
  }
  var stringInput=input.toString();
  if(stringInput.length>5||stringInput.length<5){
    throw RangeError;
  }
  else{
  const zipcodeDispatch = {
      type: 'zipcodeDispatch',
      payload: input, 
    }
  rootStore.dispatch(zipcodeDispatch);   
  }
}

/**
 * @brief this function essentially just returns the zipcode that has been inputed
 * @returns {Number} zipcode
 */
export function getZipcode(){
  var state = rootStore.getState().zipcode;
  return state;
}