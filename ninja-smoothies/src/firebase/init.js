import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCGeUCZ2JvBkP0EmLiCmPBplsbbvlSnRkI",
  authDomain: "udemy-ninja-smoothies-28bd0.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-28bd0.firebaseio.com",
  projectId: "udemy-ninja-smoothies-28bd0",
  storageBucket: "udemy-ninja-smoothies-28bd0.appspot.com",
  messagingSenderId: "476623102260"
};
const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore()