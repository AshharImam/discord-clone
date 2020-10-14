import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH3EOV-gt3BKkQ7YZoPWJMzHibefIYmkc",
    authDomain: "discord-clone-2.firebaseapp.com",
    databaseURL: "https://discord-clone-2.firebaseio.com",
    projectId: "discord-clone-2",
    storageBucket: "discord-clone-2.appspot.com",
    messagingSenderId: "975251645871",
    appId: "1:975251645871:web:ce2fa43e1e9b245bdd7b5a",
    measurementId: "G-WGC733Y5DF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;