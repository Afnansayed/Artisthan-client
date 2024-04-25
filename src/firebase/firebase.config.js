// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCit8u2VUo0eoFsL5aTFC1m3eWiRPfs6f8",
  authDomain: "assignment-10-b8ee6.firebaseapp.com",
  projectId: "assignment-10-b8ee6",
  storageBucket: "assignment-10-b8ee6.appspot.com",
  messagingSenderId: "416772995550",
  appId: "1:416772995550:web:b8cd276fa9fec7070a454f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;