import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbblRnG_eEbeRdKWgt58-FK-w8nzf5rDQ",
  authDomain: "reactjschat-2f7ec.firebaseapp.com",
  databaseURL: "https://reactjschat-2f7ec.firebaseio.com",
  projectId: "reactjschat-2f7ec",
  storageBucket: "reactjschat-2f7ec.appspot.com",
  messagingSenderId: "33374625410",
  appId: "1:33374625410:web:8dc1710a1a8d9e80a41e9b",
  measurementId: "G-W5DKSR0WLC"
  // copy and paste your firebase credential here
});

const db = firebaseApp.firestore();
export { firebase };
export { db };
