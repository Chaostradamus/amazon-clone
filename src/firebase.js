import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCcs6Oghej76F7CkJMor-PgoHBKKfKotU",
  authDomain: "clone-e3a68.firebaseapp.com",
  projectId: "clone-e3a68",
  storageBucket: "clone-e3a68.appspot.com",
  messagingSenderId: "670331535933",
  appId: "1:670331535933:web:dfe99b242e0b389797e054",
  measurementId: "G-XNT0EPQNPX",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };