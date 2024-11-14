import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "todolist-413a5.firebaseapp.com",
  databaseURL:
    "https://todolist-413a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-413a5",
  storageBucket: "todolist-413a5.appspot.com",
  messagingSenderId: "364577089563",
  appId: "1:364577089563:web:ee46d4e3948ce709ed70be",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
