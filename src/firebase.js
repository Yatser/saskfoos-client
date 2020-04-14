import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBFm-R1VRbVH3dKc8y5oVwPQVNHQPuUlWc",
    authDomain: "saskfoos.firebaseapp.com",
    databaseURL: "https://saskfoos.firebaseio.com",
    projectId: "saskfoos",
    storageBucket: "saskfoos.appspot.com",
    messagingSenderId: "1003337708117",
    appId: "1:1003337708117:web:ae37909845fd90e622dadc",
    measurementId: "G-0Y9M7ENXYW"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
