import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxDIc-bghjkp3sKp-fuQDkaXAiVf95bIc",
  authDomain: "staging-expensepro.firebaseapp.com",
  projectId: "staging-expensepro",
  storageBucket: "staging-expensepro.appspot.com",
  messagingSenderId: "470027004341",
  appId: "1:470027004341:web:80cbdf9ec0b9d6b40b11fc",
  measurementId: "G-TWXN30GZLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app