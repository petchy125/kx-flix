import Firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';
// const config = {
//   apiKey: '',
//   authDomain: '',
//   databaseURL: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: ''
// };

const firebaseConfig = {
  apiKey: "AIzaSyA2BVC4AsqAEJzTtYBbs81flbS9fp3t1OM",
  authDomain: "kx-flix.firebaseapp.com",
  projectId: "kx-flix",
  storageBucket: "kx-flix.appspot.com",
  messagingSenderId: "800443425283",
  appId: "1:800443425283:web:ec07e07fe6f8f4c098a436",
  measurementId: "G-VTEC2HKL7L"
};


// const firebase = Firebase.initializeApp(config);
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
export { firebase };
