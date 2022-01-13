// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import config from './config'

// firebase.initializeApp(config)
// const auth = firebase.auth()
// const database = firebase.firestore()
// export { auth, database}

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import {  getFirestore } from "firebase/firestore"
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbIoW485C2aaU58Bfyd9XZiLDjtnn0WU",
  authDomain: "shoppingadda-6669a.firebaseapp.com",
  projectId: "shoppingadda-6669a",
  storageBucket: "shoppingadda-6669a.appspot.com",
  messagingSenderId: "459244898060",
  appId: "1:459244898060:web:2376c987f8c2a5f307eb29",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore(app);
export { authentication, database}