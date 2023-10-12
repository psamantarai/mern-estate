import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c16e7.firebaseapp.com",
  projectId: "mern-estate-c16e7",
  storageBucket: "mern-estate-c16e7.appspot.com",
  messagingSenderId: "640986190132",
  appId: "1:640986190132:web:f4d7cac25b587f25691561",
};

export const app = initializeApp(firebaseConfig);
