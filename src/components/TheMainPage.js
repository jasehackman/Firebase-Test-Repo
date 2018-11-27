import ReactDOM from 'react-dom';
import firebase from "firebase";
import React, {Component} from 'react'
import SongPlayer from './SongPlayer'

export default class TheMainPage extends Component {
  render() {
    return (
      <div>
        <SongPlayer>

        </SongPlayer>

      </div>
    )
  }

}