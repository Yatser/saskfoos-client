import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./common.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
if (window && window.Cypress) {
  db.settings({ host: "localhost:8080", ssl: false });
}

export { db };
