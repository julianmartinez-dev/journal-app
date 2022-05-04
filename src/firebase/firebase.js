// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, FieldValue } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHEpxh55782L1cAE18161MC3v1iFPNfpg',
  authDomain: 'journalapp-c5cdd.firebaseapp.com',
  projectId: 'journalapp-c5cdd',
  storageBucket: 'journalapp-c5cdd.appspot.com',
  messagingSenderId: '1047005022539',
  appId: '1:1047005022539:web:c217ce8e01955ae5b080ce',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);
const googleAuthProvider = new GoogleAuthProvider()

export { db, googleAuthProvider, firebase };
