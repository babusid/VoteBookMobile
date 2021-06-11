//Imports
import React from 'react';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

//necessary redux packages
import {dispatchMapPins, getMapPins} from '../__redux__/Actions/REDUX_mapPins.js'; 
import {getZipcode} from '../__redux__/Actions/REDUX_zipcode';

//firebase imports
import firebase from 'firebase/app'
import 'firebase/firestore';


//firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyBsO7neh6HPqucYs82viI7poY-MlNOQecA",
  authDomain: "testserv-d3178.firebaseapp.com",
  projectId: "testserv-d3178",
  storageBucket: "testserv-d3178.appspot.com",
  messagingSenderId: "76783832841",
  appId: "1:76783832841:web:ae388e3441b8344b1a8dd8",
  measurementId: "G-7VYFJVJJKT"
};
firebase.initializeApp(firebaseConfig);
var FireDB = firebase.firestore();
let runonce = false;
let runonceExp = false;

/**
 * @brief This function will attach a listener to our database that will continually update our redux store as data changes on the server side
 * @param {import('@react-native-community/netinfo').NetInfoState} netinfo object from calling component to let snapshot know whether it should run at all
 * @returns {Function} Function that will unsubscribe the listener. **The cleanup function is not yet finished**
 */
export async function FirebaseMapListener(netinfo){
    if(netinfo.isConnected==true){ 
        const zipcode = getZipcode().toString();
        if (zipcode == undefined){
            throw "Zipcode Undefined in Redux Store for Firebase Data Snapshot";
        }
        const query = FireDB.collection("AppDown").where('zip', '==', zipcode).onSnapshot(
            (qres)=>{
                console.log("qres");
                if (qres.empty){ //no pins to be stored
                    console.log("No pins for this zipcode found in DB.");
                    Alert.alert("Sorry, we were unable to download any polling locations for this zipcode from our database.");
                    let blank = [];
                    dispatchMapPins(blank);
                    return; //nothing important put into the store
                }
                let dataArr = [];
                qres.forEach((doc)=>{
                    dataArr.push(doc.data());
                })
                if(dataArr!= getMapPins()){ 
                    dispatchMapPins(dataArr); 
                    console.log(getMapPins()); //DEBUG
                }
             },
            (error)=>{
                console.log("Firebase Listener has an error (firebaseListener.js:48): \n");
                console.log(error);
                console.log("\n");
            },
        );
    }else if (!runonce){
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonce = true; 
    }
    return ()=>{};
}