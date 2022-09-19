import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnfkHUm0LN-RNyno01lB0h7ysV86PUZQc",
  authDomain: "tinder-clone-185fb.firebaseapp.com",
  projectId: "tinder-clone-185fb",
  storageBucket: "tinder-clone-185fb.appspot.com",
  messagingSenderId: "816470171481",
  appId: "1:816470171481:web:da0633905bfc504a43b648",
  measurementId: "G-GM4YLDJZ13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;