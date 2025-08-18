// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt7WxGoqa3uzqISawhBWpfx_Yr5kuiAfE",
  authDomain: "netflixgpt-76fae.firebaseapp.com",
  projectId: "netflixgpt-76fae",
  storageBucket: "netflixgpt-76fae.firebasestorage.app",
  messagingSenderId: "985050879271",
  appId: "1:985050879271:web:a3cf5911035d23a1dc8502",
  measurementId: "G-BSDRBFYQ7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();