import { rootstore } from store.js
import { createAction } from '@reduxjs/toolkit'


function dispatchZipcode( input ){

    const zipcodeDispatch = {
        type: 'zipcodeDispatch',
        payload: input, 
      }
    rootstore.dispatch(zipcodeDispatch);
      
}

function getZipcode(){
  var state = rootstore.getState();

  return String(state);
}