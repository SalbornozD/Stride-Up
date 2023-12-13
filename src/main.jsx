import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9cMewOQYXNylcWRAf3J9gp2oXOVQkd3Y",
  authDomain: "strideup2-96827.firebaseapp.com",
  projectId: "strideup2-96827",
  storageBucket: "strideup2-96827.appspot.com",
  messagingSenderId: "756712609323",
  appId: "1:756712609323:web:269781ffcdba1fdde1bc6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
