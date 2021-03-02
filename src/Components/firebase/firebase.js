
import firebase from "firebase/app"
import "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAC8zPOyzBRSqf4kZyhPwuIcYal-PUGigQ",
  authDomain: "reactschooldatamanagment.firebaseapp.com",
  projectId: "reactschooldatamanagment",
  storageBucket: "reactschooldatamanagment.appspot.com",
  messagingSenderId: "150194931911",
  appId: "1:150194931911:web:f0a67a8efcb8003da656e2",
  measurementId: "G-FN2466CDR9"
};




  // Initialize Firebase

firebase.initializeApp(firebaseConfig);






const provider = new firebase.auth.GoogleAuthProvider




export{firebase as default ,provider}

  
