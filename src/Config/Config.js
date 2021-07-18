import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDq_WRJbnZtWnSxqbV_kl-ZZS8DVnhy6wg",
    authDomain: "ecommerce-app-with-react-hooks.firebaseapp.com",
    projectId: "ecommerce-app-with-react-hooks",
    storageBucket: "ecommerce-app-with-react-hooks.appspot.com",
    messagingSenderId: "719037100374",
    appId: "1:719037100374:web:6c6091a610ce02b3a766f7",
    measurementId: "G-ZN4GN3FPP7"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}