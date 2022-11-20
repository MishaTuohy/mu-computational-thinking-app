import { app } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.db = getDatabase(app);
    this.auth = getAuth(app);
  }

  onAuthStateChange = () => {
    new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Auth State Changed failed"));
        }
      })
    })
  }

  signIn = () =>
    this.auth.signInAnonymously().catch(() => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
