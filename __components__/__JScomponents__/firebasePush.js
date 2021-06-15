import { FireDB } from "./firebaseConfig";
import firebase from 'firebase/app'
import 'firebase/firestore';

/**
 * @brief function to construct a timestamped payload to send through our FirebasePush function to report wait times. 
 * @param {Number} payload The payload should be a **number** indicating the wait time in minutes.
 */
export const FirebasePacket = (payload)=>{
    return {
        "payload": payload,
        "timestamp": Date.now(),
    };
}

/**
 * @brief This function 
 * @param {FirebasePacket} packet
 */
export const FirebasePush = async(packet)=>{
    
}