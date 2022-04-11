import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBbAu5hFVnkCUkxV1RofuyZ_B3ytL9PDe8",
  authDomain: "ema-john-simple-241ff.firebaseapp.com",
  projectId: "ema-john-simple-241ff",
  storageBucket: "ema-john-simple-241ff.appspot.com",
  messagingSenderId: "3589626281",
  appId: "1:3589626281:web:7d2d36214b12d47d3d0cb8"
};



const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;