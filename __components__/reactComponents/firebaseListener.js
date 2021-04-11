import React from 'react';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import {pinsUpdateRedux} from '../__redux__/Actions/REDUX_mapPins.js'; 

const zipcode = getZipcode();
const zipcodeRef = firestore.collection("AppDown");
const query = zipcodeRef.where('loc.Z', '==', 'zipcode').get();
if (query.empty) {
    console.log('No matching zipcodes.');
    Alert.alert("Sorry. We can't find any polling locations for this zipcode.")
    return;
}

const firebaseconfig = {}
firebaseconfig.initializeApp(firebaseconfig)
const firestore = firebase.firestore()

function FirebaseComponent(){
    const netinfo = useNetInfo();
    let runonce = False;
    if (netinfo.isInternetReachable){
        const listener = firestore.collection("AppDown").onSnapshot(
            (collectionSnapshot)=>{
                var dataFiles = [];
                query.forEach((doc) => {
                    dataFiles.push(doc)
                });
                pinsUpdateRedux(dataFiles);
        });
    } else if(!runonce) {
        Alert.alert("Internet not reachable, we cannot render the pins")
        runonce = True; 
    }
}