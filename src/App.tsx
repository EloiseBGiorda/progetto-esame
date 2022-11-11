import React from "react";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDym82a3D5JVRlnm58kQyxnpip5h7SukMw",
  authDomain: "tvmaze-app-giorda.firebaseapp.com",
  projectId: "tvmaze-app-giorda",
  storageBucket: "tvmaze-app-giorda.appspot.com",
  messagingSenderId: "337112159121",
  appId: "1:337112159121:web:9b2a9b050217b66c6cc030",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
