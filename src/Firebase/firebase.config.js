// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw5f-4ai474wGGyTGyzULp-xue-wcYAYw",
  authDomain: "plans-store.firebaseapp.com",
  projectId: "plans-store",
  storageBucket: "plans-store.firebasestorage.app",
  messagingSenderId: "1018321721712",
  appId: "1:1018321721712:web:87d63f1ba5555981c0d7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth