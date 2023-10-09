import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjsOFQUyybO5At2atXleSbuj3tlmlzgwE",
  authDomain: "birent-70817.firebaseapp.com",
  projectId: "birent-70817",
  storageBucket: "birent-70817.appspot.com",
  messagingSenderId: "464120786008",
  appId: "1:464120786008:web:ff739282fd966088106e2d",
  measurementId: "G-KXE3SH1F0J",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db, firebase };
