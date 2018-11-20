import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import './config/fbsend.js'
import './config/fbauth.js'


const storage = firebase.storage();
const storageRef = storage.ref();
console.log(storageRef);

storage.ref("You Know master 8.22.17.mp3").getDownloadURL()
  .then(song => {
    document.getElementById("root").innerHTML = `
      <audio
        controls
        src="${song}">
      </audio>`
  })

