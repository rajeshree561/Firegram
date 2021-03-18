import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC6TV59RRM350ndouhsmyH2u1yWO4sAItA",
    authDomain: "ninja--firegram.firebaseapp.com",
    projectId: "ninja--firegram",
    storageBucket: "ninja--firegram.appspot.com",
    messagingSenderId: "861407002231",
    appId: "1:861407002231:web:6172ed604710d45b541072"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore,timestamp };