import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDemvYAC7MUOPZT1_daDtSNzTTdK9tsfR8",
    authDomain: "anime-rev-db9b0.firebaseapp.com",
    projectId: "anime-rev-db9b0",
    storageBucket: "anime-rev-db9b0.appspot.com",
    messagingSenderId: "442553850597",
    appId: "1:442553850597:web:0e87143d828746a7e2d20c",
    measurementId: "G-419ETVBS5D"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;