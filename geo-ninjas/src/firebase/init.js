import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBL6HXV9X1ontJHuNcwywLxVEMIWHRpv60",
  authDomain: "udemy-geo-ninjas-5ab2e.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-5ab2e.firebaseio.com",
  projectId: "udemy-geo-ninjas-5ab2e",
  storageBucket: "",
  messagingSenderId: "635273320462"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()