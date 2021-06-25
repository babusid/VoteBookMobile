import { FireDB } from "./firebaseConfig";
import { getPushId } from "../__redux__/Actions/REDUX_mapPins";
import firebase from 'firebase/app'
import 'firebase/firestore';


/**
 * @brief This function 
 * @param {Number} packet
 * @returns {Promise} will resolve when the push succeeds
 */
export const FirebasePush = async(packet)=>{
    return FireDB.collection("waitReport").doc(`${getPushId()}`).set(
        {[Date.now()]:packet},
        {merge:true}
    );
}