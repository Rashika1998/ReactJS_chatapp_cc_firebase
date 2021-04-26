import React from 'react';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCI4hxnU9puY_dWB9dFlOcYHEeppIZLtds",
    authDomain: "webapp-v001-b7bd8.firebaseapp.com",
    projectId: "webapp-v001-b7bd8",
    storageBucket: "webapp-v001-b7bd8.appspot.com",
    messagingSenderId: "87086325314",
    appId: "1:87086325314:web:c9addfc9edce641a14d7db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
