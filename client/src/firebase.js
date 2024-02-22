// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "real-estate-f6a45.firebaseapp.com",
  projectId: "real-estate-f6a45",
  storageBucket: "real-estate-f6a45.appspot.com",
  messagingSenderId: "1002198382804",
  appId: "1:1002198382804:web:d418bf7770430d61382341"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 