import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyAhTCbQHZIfN3eJsdP7uSmlu826EcZFi8Q",
        authDomain: "testing-ecommerce-db.firebaseapp.com",
        databaseURL: "https://testing-ecommerce-db.firebaseio.com",
        projectId: "testing-ecommerce-db",
        storageBucket: "testing-ecommerce-db.appspot.com",
        messagingSenderId: "572641439139",
        appId: "1:572641439139:web:06b3531613ad1b21a7be16",
        measurementId: "G-FSX7FH92TS"
      };
     
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
      
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default signInWithGoogle;

