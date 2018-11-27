import ReactDOM from 'react-dom';
import firebase from "firebase";
import React, {Component} from 'react'
import SongPlayer from './SongPlayer'
import APICalls from '../modules/APICalls'


export default class TheMainPage extends Component {
  state = {
    songs: [],
    playlist: []
  }

  componentDidMount(){
    APICalls.getFromJson("songs", 1)
      .then(songData => songData.json())
      .then(arrayofSongs => {
        this.setState({
          songs: arrayofSongs
        })
      })

    // if i was getting download urls from firebase
    // APICalls.getFromJson("songs", 1)
    //   .then(songData => songData.json())
    //   .then(songData => {
    //     console.log(songData)
    //     let songArray= songData.map(singleSong => {
    //      return APICalls.getSingleSong(singleSong.url)
    //   })
    //     let resolvedSongs = Promise.all(songArray)
    //     resolvedSongs.then(newSongArray => {
    //       console.log(newSongArray)
    //       this.setState({
    //         songs: newSongArray
    //       })
    //     })
    // })

  }

  render() {
    return (
      <div>
        <SongPlayer songs = {this.state.songs}>

        </SongPlayer>

      </div>
    )
  }

}