// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ca751.firebaseapp.com",
  projectId: "mern-blog-ca751",
  storageBucket: "mern-blog-ca751.appspot.com",
  messagingSenderId: "176984001220",
  appId: "1:176984001220:web:6ef97dba4a61924072d791"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);