// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2BVC4AsqAEJzTtYBbs81flbS9fp3t1OM",
  authDomain: "kx-flix.firebaseapp.com",
  projectId: "kx-flix",
  storageBucket: "kx-flix.appspot.com",
  messagingSenderId: "800443425283",
  appId: "1:800443425283:web:ec07e07fe6f8f4c098a436",
  measurementId: "G-VTEC2HKL7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);