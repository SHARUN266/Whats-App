import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhECXZjAjxaRq-9MD7Xh7RDsvbrrCBupI",
  authDomain: "whatapp-clone-f2356.firebaseapp.com",
  projectId: "whatapp-clone-f2356",
  storageBucket: "whatapp-clone-f2356.appspot.com",
  messagingSenderId: "322093775954",
  appId: "1:322093775954:web:9016beda40375aa067738b",
 
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider, app };
