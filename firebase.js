import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvbbb4ncMTfPgvx9xdbN-05n9iRFAjIWA",
  authDomain: "whatsapp-clone-593e6.firebaseapp.com",
  projectId: "whatsapp-clone-593e6",
  storageBucket: "whatsapp-clone-593e6.appspot.com",
  messagingSenderId: "741529293792",
  appId: "1:741529293792:web:6df6d1b276e482d2899185",
  measurementId: "G-J8ZDDWK394"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const rtdb = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { db, rtdb, auth, googleProvider, githubProvider };
