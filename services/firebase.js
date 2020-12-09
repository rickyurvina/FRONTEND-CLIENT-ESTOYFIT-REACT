import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA9W8brJo2gs0zpQtPU_jNDg4X1Tn_X1Lc",
  authDomain: "proconty-gym.firebaseapp.com",
  databaseURL: "https://proconty-gym.firebaseio.com",
  projectId: "proconty-gym",
  storageBucket: "proconty-gym.appspot.com",
  messagingSenderId: "1072764516395",
  appId: "1:1072764516395:web:78ffb480e2ddb4ce2d126e",
  measurementId: "G-NYG97YFX6Z"
  };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

