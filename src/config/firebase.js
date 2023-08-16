// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { storage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hEZkY5Gyxn8kqIWaDEVSnj3CUCFsIbY",
  authDomain: "kkntebingtinggi.firebaseapp.com",
  projectId: "kkntebingtinggi",
  storageBucket: "kkntebingtinggi.appspot.com",
  messagingSenderId: "587625190025",
  appId: "1:587625190025:web:e0f2dfe659390b485cec58",
  measurementId: "G-90C7K7CGZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default { storage };