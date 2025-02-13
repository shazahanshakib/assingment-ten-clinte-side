// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmunx-qwMD6Tm7614NDoaQ8T8j6HHRLH0",
  authDomain: "assingment-ten-project-76b43.firebaseapp.com",
  projectId: "assingment-ten-project-76b43",
  storageBucket: "assingment-ten-project-76b43.firebasestorage.app",
  messagingSenderId: "111221133786",
  appId: "1:111221133786:web:5c4be993caa742b4dfb0e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
