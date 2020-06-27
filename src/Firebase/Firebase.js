import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDuC_wLEhwPpFjk6iwrkid2_GWni5QjlwY",
  authDomain: "todos-auth-dc3c1.firebaseapp.com",
  databaseURL: "https://todos-auth-dc3c1.firebaseio.com",
  projectId: "todos-auth-dc3c1",
  storageBucket: "todos-auth-dc3c1.appspot.com",
  messagingSenderId: "883874798434",
  appId: "1:883874798434:web:1b4f8ac3e7797ca7e42a3b",
  measurementId: "G-W01QW8FNKE"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
