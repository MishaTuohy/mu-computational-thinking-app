import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBsT46f97yy0IpFUgQYB0INJaIpBaC7NQ",
  authDomain: "mu-computational-thinking-app.firebaseapp.com",
  databaseURL: "https://mu-computational-thinking-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mu-computational-thinking-app",
  storageBucket: "mu-computational-thinking-app.appspot.com",
  messagingSenderId: "408185952246",
  appId: "1:408185952246:web:6603731e3cbabc6ef319d7"
};
const firebaseApp = initializeApp(firebaseConfig);

export {firebaseConfig, firebaseApp};
