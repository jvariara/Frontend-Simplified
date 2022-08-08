// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSX5zfdUsdPPO6pZbTy4D0P6TNSNnW62w",
  authDomain: "firestore-tutorial-92837.firebaseapp.com",
  projectId: "firestore-tutorial-92837",
  storageBucket: "firestore-tutorial-92837.appspot.com",
  messagingSenderId: "1080646048127",
  appId: "1:1080646048127:web:905dbea77ef97ea08de24a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()