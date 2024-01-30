// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'auth-with-6f388.firebaseapp.com',
    projectId: 'auth-with-6f388',
    storageBucket: 'auth-with-6f388.appspot.com',
    messagingSenderId: '470660274322',
    appId: '1:470660274322:web:ea716b88a160716a6c6e4b'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);