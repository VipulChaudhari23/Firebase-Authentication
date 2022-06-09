import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvxukhJE6T9BXnGsTUGY_Tb9rTkpCk5i8",
  authDomain: "phonenumber-ba1ee.firebaseapp.com",
  projectId: "phonenumber-ba1ee",
  storageBucket: "phonenumber-ba1ee.appspot.com",
  messagingSenderId: "685324389039",
  appId: "1:685324389039:web:d8e7baa6bca259c8b3625a",
  measurementId: "G-BHBNCNF6V1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
