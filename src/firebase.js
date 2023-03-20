// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAhhYUgGCuPZ7pJZNuz98d-ePWaYQndSJw",
  authDomain: "hangry-971c3.firebaseapp.com",
  projectId: "hangry-971c3",
  storageBucket: "hangry-971c3.appspot.com",
  messagingSenderId: "211007484852",
  appId: "1:211007484852:web:4447b2a41a0f098342b8e1",
  measurementId: "G-MK712FDHYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};