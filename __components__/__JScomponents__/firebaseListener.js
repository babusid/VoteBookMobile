//Imports
import { Alert } from 'react-native';
//necessary redux packages
import {dispatchMapPins} from '../__redux__/Actions/REDUX_mapPins.js'; 
import {getZipcode} from '../__redux__/Actions/REDUX_zipcode';
import { FireDB } from './firebaseConfig.js';
/**
 * @brief This function will attach a listener to our database that will continually update our redux store as data changes on the server side
 * @param {import('@react-native-community/netinfo').NetInfoState} netinfo object from calling component to let snapshot know whether it should run at all
 * @returns {import('firebase/app').Unsubscribe} Function that will unsubscribe the listener. **The cleanup function is not yet finished**
 */
export  function FirebaseMapListener(netinfo){
    const zipcode = getZipcode().toString();
    if (zipcode == undefined){
        throw "Zipcode Undefined in Redux Store for Firebase Data Snapshot";
    }
    const query = FireDB.collection("AppDown").where('zip', '==', zipcode).onSnapshot(
        (qres)=>{
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
            dispatchMapPins(dataArr);
        },
        (error)=>{
            if(netinfo.isConnected==false){
                Alert.alert("We were unable to connect to our server properly. Please ensure that you have a internet connection in order to utilize our Map features.");
            } else {
                Alert.alert("We ran into an unexpected error. Please relaunch our app. Thank you for your patience.");
            }
            console.log("Firebase Listener has an error (firebaseListener.js:48): \n");
            console.log(error);
            console.log("\n");
        },
    );
    return query;
}