import ReactDOM from 'react-dom';
import firebase from "firebase";
import React, {Component} from 'react'


export default class SongPlayer extends Component {
  render() {
    return (
      <section className = "songList">
        {this.props.songs.map(song =>
          <div key={song.id}>
            <h3>{song.name}</h3>

            <audio controls src={song.downloadURL}></audio>
          </div>
      )}
      </section>

    )


// storage.ref("You Know master 8.22.17.mp3").getDownloadURL()
//   .then(song => {
//     document.getElementById("root").innerHTML = `
//       <audio
//         controls
//         src="${song}">
//       </audio>`
//   })

}

}