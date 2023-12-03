// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX_-0ceeqxtfaZIbeunHoRAjEb2xQVPxw",
  authDomain: "project2-e2e74.firebaseapp.com",
  projectId: "project2-e2e74",
  storageBucket: "project2-e2e74.appspot.com",
  messagingSenderId: "104938273302",
  appId: "1:104938273302:web:0c0523cb18bfd53b041337",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
