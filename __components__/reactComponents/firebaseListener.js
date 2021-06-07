//Imports
import React from 'react';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

//necessary redux packages
import {dispatchMapPins} from '../__redux__/Actions/REDUX_mapPins.js'; 
import {getZipcode} from '../__redux__/Actions/REDUX_zipcode';

//firebase imports
import firebase from 'firebase/app'
import 'firebase/firestore';

//firebase setup
const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);
var FireDB = firebase.firestore();
let runonce = false;

/**
 * @brief This function will take **ONE** snapshot of our Database and push it to the redux store.
 * @warning This function will have to be **called repeatedly to function as a listener**, as it internally uses a snapshot method to get the data from the server. As such, it should be called within an effect method of the calling component
 */
export async function FirebaseDataSnapshot(){
    const netinfo = useNetInfo();
    let dataPins = [];
    if (netinfo.isInternetReachable){   
        const zipcode = getZipcode();
        const zipcodeRef = FireDB.collection("AppDown");
        const query = zipcodeRef.where('zip', '==', zipcode).get();
        await query; //DEBUG
        query.then((qres)=>{ //testing needed to make sure that this callback runs before the component exits through the return. 
            if (qres.empty){
                console.log("No pins for this zipcode found in DB.");
                Alert.alert("Sorry, we were unable to download any polling locations for this zipcode from our database.");
                dispatchMapPins(dataPins);
                return;
            }
            qres.forEach((doc)=>{
                dataPins.push(doc.data);
            });
            dispatchMapPins(dataPins); 
        });
    }else if (!runonce){
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonce = True; 
    }
}