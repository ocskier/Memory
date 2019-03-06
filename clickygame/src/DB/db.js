import firebase from 'firebase/app';
import 'firebase/database';

// The database config for my Firebase acct
const config = {
    apiKey: process.env.API_KEY,
    authDomain: "projectcodingcamp.firebaseapp.com",
    databaseURL: "https://projectcodingcamp.firebaseio.com",
    projectId: "projectcodingcamp",
    storageBucket: "projectcodingcamp.appspot.com",
    messagingSenderId: "277978229879"
  };
  
// Inititalize the database
firebase.initializeApp(config);

// Assign my database ref for folder TrainScheduler to a variable
const db = firebase.database();
const jjdb = db.ref("Memory");

export default jjdb;