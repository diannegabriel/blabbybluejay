import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC88qm_K6M9PYwSXpVcM-dVOoaH8ZrY4TE",
  authDomain: "blabbybluejay-1c9ea.firebaseapp.com",
  projectId: "blabbybluejay-1c9ea",
  storageBucket: "blabbybluejay-1c9ea.appspot.com",
  messagingSenderId: "1098026640990",
  appId: "1:1098026640990:web:6b4ba74f5b8b27c8def6cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)