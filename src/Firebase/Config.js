import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsHrbhCnE-qwQ4_77W5wExjWvTIt0lQMM",
    authDomain: "olx-clone-b9829.firebaseapp.com",
    projectId: "olx-clone-b9829",
    storageBucket: "olx-clone-b9829.appspot.com",
    messagingSenderId: "716919341712",
    appId: "1:716919341712:web:dea11cb2502e1eb6128e15",
    measurementId: "G-CGE540J2J4"
  };


export default firebase.initializeApp(firebaseConfig)