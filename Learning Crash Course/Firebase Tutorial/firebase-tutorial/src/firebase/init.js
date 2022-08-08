// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPM-Fy0Tv76jkiPEWxEEhx1qnYtutWl0o",
  authDomain: "fir-tutorial-41986.firebaseapp.com",
  projectId: "fir-tutorial-41986",
  storageBucket: "fir-tutorial-41986.appspot.com",
  messagingSenderId: "306880058706",
  appId: "1:306880058706:web:4e72a79175b81ea2e4168b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()