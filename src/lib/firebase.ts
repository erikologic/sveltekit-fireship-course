import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAIXd28A3zNiroBd2LTr-RQckANtB2s-VE",
    authDomain: "svelte-course-fireship-ceaf8.firebaseapp.com",
    projectId: "svelte-course-fireship-ceaf8",
    storageBucket: "svelte-course-fireship-ceaf8.appspot.com",
    messagingSenderId: "1049472524342",
    appId: "1:1049472524342:web:a42d340bb4c47ea91b3897",
    measurementId: "G-RDHCQPL1F0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();