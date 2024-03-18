// Firebase.js
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCj6PpVjpD1yqvSZEEMIkkMMxKsIMs88t4",
  authDomain: "finalbadrequest.firebaseapp.com",
  projectId: "finalbadrequest",
  storageBucket: "finalbadrequest.appspot.com",
  messagingSenderId: "296303940526",
  appId: "1:296303940526:web:1c9033288546c68237ae3f"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
