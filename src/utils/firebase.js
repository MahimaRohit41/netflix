// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1XmgFsz5yj8ph0-490moK1qzpwNLIthM",
  authDomain: "netflixgpt-31267.firebaseapp.com",
  projectId: "netflixgpt-31267",
  storageBucket: "netflixgpt-31267.appspot.com",
  messagingSenderId: "132660231351",
  appId: "1:132660231351:web:43b31e62a0cd71053de132",
  measurementId: "G-FN8XMFY0EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
