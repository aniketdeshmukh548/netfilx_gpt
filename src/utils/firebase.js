// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5gGnOYFD6HzspFNMEDcPVmzxTwgzwp0",
  authDomain: "netflixgptaniket.firebaseapp.com",
  projectId: "netflixgptaniket",
  storageBucket: "netflixgptaniket.appspot.com",
  messagingSenderId: "603942336050",
  appId: "1:603942336050:web:c84e450e1e0f85f1b52e2b",
  measurementId: "G-7QQTRR2B1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();