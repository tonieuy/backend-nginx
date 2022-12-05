// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRA0Y8iLLEETFEQm9ZaGl_F1iKEMIyz0U",
  authDomain: "merry-potret.firebaseapp.com",
  projectId: "merry-potret",
  storageBucket: "merry-potret.appspot.com",
  messagingSenderId: "233792315542",
  appId: "1:233792315542:web:36a585096861d46a3722b7",
  measurementId: "G-TVBKLMTN41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);