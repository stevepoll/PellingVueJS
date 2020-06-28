import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBUATSx7NkrCQndwg2gJFxw3WTPvjArbUo",
  authDomain: "udemy-ninja-chat-e1c62.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-e1c62.firebaseio.com",
  projectId: "udemy-ninja-chat-e1c62",
  storageBucket: "udemy-ninja-chat-e1c62.appspot.com",
  messagingSenderId: "706680745875"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()