import firebase from "firebase";
import '../config/fbsend.js'
import '../config/fbauth.js'



// const songURL = "You Know master 8.22.17.mp3"

const storage = firebase.storage();
const storageRef = storage.ref();

const jsonURL = "http://localhost:5002"

 class APICalls {

  getFromJson(dataType, id) {
    return fetch(`${jsonURL}/${dataType}?userId=${id}`)
  }

  getSingleSong(songURL) {
  return storage.ref(songURL).getDownloadURL()
  }

  getAllSongs () {
    return storageRef.getDownloadURL()
  }
}

export default new APICalls()