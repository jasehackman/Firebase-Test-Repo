import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import './config/fbsend.js'
import './config/fbauth.js'
import TheMainPage from './components/TheMainPage'


const storage = firebase.storage();
const storageRef = storage.ref();
console.log(storageRef);



  ReactDOM.render(
    <TheMainPage />,
    document.getElementById('root')
  );