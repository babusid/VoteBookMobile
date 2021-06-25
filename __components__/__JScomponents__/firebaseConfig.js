import firebase from 'firebase/app'
import 'firebase/firestore';
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
export const FireDB = firebase.firestore();
