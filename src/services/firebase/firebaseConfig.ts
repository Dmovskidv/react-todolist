import { FirebaseOptions, initializeApp } from "firebase/app";

// const firebaseConfig: FirebaseOptions = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBTuUHQZfW6u_u3VieBZD6HUTH1ucjth-8",
  authDomain: "todolist-413a5.firebaseapp.com",
  databaseURL:
    "https://todolist-413a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-413a5",
  storageBucket: "todolist-413a5.appspot.com",
  messagingSenderId: "364577089563",
  appId: "1:364577089563:web:ee46d4e3948ce709ed70be",
};

export const app = initializeApp(firebaseConfig);
