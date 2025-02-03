// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU5PRHXC0aVr659pJ-FZUAGVP9I1v8Cew",
  authDomain: "go-higher-app.firebaseapp.com",
  projectId: "go-higher-app",
  storageBucket: "go-higher-app.firebasestorage.app",
  messagingSenderId: "86478552331",
  appId: "1:86478552331:web:1e9670c625304a284b360e",
  measurementId: "G-TY0180Q9KX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy

