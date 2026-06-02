// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { db } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkg5GZv87vMLtD-Kt4ta-Eyl_NPkUEg4Q",
  authDomain: "help-2939b.firebaseapp.com",
  projectId: "help-2939b",
  storageBucket: "help-2939b.firebasestorage.app",
  messagingSenderId: "388394047174",
  appId: "1:388394047174:web:0447fb28d03ec76c4f29c7",
  measurementId: "G-5T7SYRDNCY"
};

const app = initializeApp(firebaseConfig);
export default app;