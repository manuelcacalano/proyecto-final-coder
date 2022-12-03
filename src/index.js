import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyDzYUEkXT8AWYT3aFnKLx3LXVa7qtlAZmI",
  authDomain: "loveisaspaceshipstore.firebaseapp.com",
  projectId: "loveisaspaceshipstore",
  storageBucket: "loveisaspaceshipstore.appspot.com",
  messagingSenderId: "216627671953",
  appId: "1:216627671953:web:9f2c29fba0d81f010da030",
  measurementId: "G-8B2L1CXM9E"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

