// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpkK3B1V7pKkuSkZnyHI_6jV0fkKGqncw",
  authDomain: "track-my-pantry-d0361.firebaseapp.com",
  projectId: "track-my-pantry-d0361",
  storageBucket: "track-my-pantry-d0361.appspot.com",
  messagingSenderId: "493579509011",
  appId: "1:493579509011:web:621774de7c90c46e7a4ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{app,firestore}