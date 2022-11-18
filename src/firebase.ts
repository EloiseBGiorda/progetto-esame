
import { initializeApp } from "firebase/app";
import {
  getAuth,

} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tvmaze-app-giorda.firebaseapp.com",
    projectId: "tvmaze-app-giorda",
    storageBucket: "tvmaze-app-giorda.appspot.com",
    messagingSenderId: "337112159121",
    appId: "1:337112159121:web:9b2a9b050217b66c6cc030",
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);