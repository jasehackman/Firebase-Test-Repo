import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import './config/fbsend.js'
import './config/fbauth.js'
import TheMainPage from './components/TheMainPage'



// console.log(storageRef);



  ReactDOM.render(
    <TheMainPage />,
    document.getElementById('root')
  );