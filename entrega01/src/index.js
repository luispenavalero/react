import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjchYkAKKwWuO_hOaHuIYl4HDiVXsTde0",
  authDomain: "reactpenavalero.firebaseapp.com",
  projectId: "reactpenavalero",
  storageBucket: "reactpenavalero.appspot.com",
  messagingSenderId: "387657627042",
  appId: "1:387657627042:web:2b2aecfe99d05bda5ceefb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


