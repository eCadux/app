import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqjGLEuvX-TzcIDFCmu-buGrpXWA__loo",
  authDomain: "ecadux-3d746.firebaseapp.com",
  projectId: "ecadux-3d746",
  storageBucket: "ecadux-3d746.appspot.com",
  messagingSenderId: "210606596517",
  appId: "1:210606596517:web:77007431f7278073ee084c",
  measurementId: "G-QB1ZJSL1CE"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
