// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GFYXaz7ccTur1adnvADLsvTirjmeMFs",
  authDomain: "motiar-store.firebaseapp.com",
  projectId: "motiar-store",
  storageBucket: "motiar-store.firebasestorage.app",
  messagingSenderId: "71369007983",
  appId: "1:71369007983:web:eb5d3279a3e9e84899fe9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)