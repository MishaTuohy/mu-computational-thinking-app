import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database';
import { firebaseApp } from './firebaseConfig';

class Firebase {
  constructor() {
    this.app = firebaseApp;
    this.db = getDatabase(firebaseApp);
    this.auth = getAuth(firebaseApp);
  }

  createAccount = (name, email) => {
    push(ref(this.db), {
      username: name,
      email: email
    });
  }
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
