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
 * @brief This function will take **ONE** snapshot of our Database and push it to the redux store.
 * @warning This function will have to be **called repeatedly to function as a listener**, as it internally uses a snapshot method to get the data from the server. As such, it should be called within an effect method of the calling component
 * @param {import('@react-native-community/netinfo').NetInfoState} netinfo object from calling component to let snapshot know whether it should run at all
 */
export async function FirebaseDataSnapshot(netinfo){
    if(netinfo.isConnected==true){  
        console.log("here")
        const zipcode = getZipcode().toString();
        if (zipcode == undefined){
            throw "Zipcode Undefined in Redux Store for Firebase Data Snapshot";
        }
        const zipcodeRef = FireDB.collection("AppDown");
        const query = zipcodeRef.where('zip', '==', zipcode).get();
        await query; 
        query.then((qres)=>{
            if (qres.empty){ //no pins to be stored
                console.log("No pins for this zipcode found in DB.");
                Alert.alert("Sorry, we were unable to download any polling locations for this zipcode from our database.");
                let blank = [];
                dispatchMapPins(blank);
                return ; //nothing important put into the store
            }
            const dataArr = qres.forEach((doc)=>{
                return doc.data();
            })
            if(dataArr!= getMapPins()){ 
                dispatchMapPins(dataArr); 
                console.log(getMapPins());
                return;
            }
        });
    }else if (!runonce){
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonce = true; 
    }
}


/**
 * @brief This function will take **ONE** snapshot of our Database and push it to the redux store. **THIS FUNCTION IS EXPERIMENTAL AND NOT GUARANTEED TO BE STABLE OR FUNCTIONAL**
 * @warning This function will have to be **called repeatedly to function as a listener**, as it internally uses a snapshot method to get the data from the server. As such, it should be called within an effect method of the calling component
 * @returns {Boolean} true or false depending on whether new data is pushed to the store
 */
 export async function FirebaseDataSnapshotExp(){
    const netinfo = useNetInfo();
    // console.log(netinfo); //DEBUG
    if(netinfo.isConnected==true){  
        const zipcode = getZipcode().toString();
        if (zipcode == undefined){
            throw "Zipcode Undefined in Redux Store for Firebase Data Snapshot";
        }
        const zipcodeRef = FireDB.collection("AppDown");
        const query = zipcodeRef.where('zip', '==', zipcode).get();
        await query; 
        query.then((qres)=>{
            if (qres.empty){ //no pins to be stored
                console.log("No pins for this zipcode found in DB.");
                Alert.alert("Sorry, we were unable to download any polling locations for this zipcode from our database.");
                let blank = [];
                dispatchMapPins(blank);
                return false; //nothing important put into the store
            }
            if(getMapPins()==undefined||qres.docs!=undefined){ //there are no pins stored so we can just do a simple set
                dispatchMapPins(qres.docs);
                return true;
            }
            if(qres.docs!= getMapPins()){ 
                dispatchMapPins(qres.docs); 
                return true;
            }
        });
    }else if (!runonceExp){
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonceExp = true; 
    }
}