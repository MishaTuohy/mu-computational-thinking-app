// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1yR5DEmcLq2S47H3VKaSu2JQf4-NEKjk",
  authDomain: "mu-ct-app.firebaseapp.com",
  projectId: "mu-ct-app",
  storageBucket: "mu-ct-app.appspot.com",
  messagingSenderId: "129253705611",
  appId: "1:129253705611:web:3f028a829afe01b4c8d18e",
  measurementId: "G-NSZS5S17N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
