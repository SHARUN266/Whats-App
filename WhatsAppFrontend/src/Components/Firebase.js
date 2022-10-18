// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC3IKh0hRcsBX3tq_DDAl6-U26K2tQ3eL0",
    authDomain: "whatsapp-clone-18bb1.firebaseapp.com",
    projectId: "whatsapp-clone-18bb1",
    storageBucket: "whatsapp-clone-18bb1.appspot.com",
    messagingSenderId: "816218392120",
    appId: "1:816218392120:web:7b1882f52193bf9d9148cd",
    measurementId: "G-DENGF928SZ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth=getAuth()
export {app,auth,provider};