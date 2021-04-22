import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyC2aRyj4AZQGBJLA47MTsm-515IgyiuCmo",
  authDomain: "clone-1a927.firebaseapp.com",
  projectId: "clone-1a927",
  storageBucket: "clone-1a927.appspot.com",
  messagingSenderId: "985492985175",
  appId: "1:985492985175:web:ddef52329869b87eb9da12",
  measurementId: "G-5SBJB9Y1FQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
