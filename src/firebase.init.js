// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlU1C1SkGTciqA3FaRnOpplkFbKgaHYE",
  authDomain: "simple-firebase-authenti-5554b.firebaseapp.com",
  projectId: "simple-firebase-authenti-5554b",
  storageBucket: "simple-firebase-authenti-5554b.appspot.com",
  messagingSenderId: "455291149604",
  appId: "1:455291149604:web:46eb352e558fc810b367b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;