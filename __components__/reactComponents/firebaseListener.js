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
const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);
var FireDB = firebase.firestore();


const zipcode = getZipcode();
const zipcodeRef = FireDB.collection("AppDown");
const query = zipcodeRef.where('loc.Z', '==', zipcode).get(); //establish a promise reference to what is needed
let runonce = false;

/**
 * @brief This function will take ONE snapshot of our Database and push it to the redux store.
 * @warning This function will have to be **called repeatedly to function as a listener**, as it internally uses a snapshot method to get the data from the server. As such, it should be called within an effect method of the calling component
 */
function FirebaseDataSnapshot(){
    const netinfo = useNetInfo();
    let dataPins = [];
    if (netinfo.isInternetReachable){   
        query.then((qres)=>{
            if (qres.empty){
                console.log("No pins for this zipcode found in DB.");
                Alert.alert("Sorry, we were unable to download any pins for this zipcode from our database.");
                dispatchMapPins(dataPins);
                return;
            }
            const arr = qres.docChanges({includeMetadataChanges:true}); //array of DocumentChange objects. Each of these objects has the structure outlined here: https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
            arr.map((obj)=>{ //go over all of the docchange objects
                if (obj.type!='removed'){
                    dataPins.push(obj.doc.data()); //push the data of each changed document that wasn't removed
                }
            });
        });
    }else if (!runonce){
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonce = True; 
    }
    return;
}