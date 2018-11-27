import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import React, {Component} from 'react'


export default class SongPlayer extends Component {
  render() {



storage.ref("You Know master 8.22.17.mp3").getDownloadURL()
  .then(song => {
    document.getElementById("root").innerHTML = `
      <audio
        controls
        src="${song}">
      </audio>`
  })

}

}