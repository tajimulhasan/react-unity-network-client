// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjh53rFjvfN3ZqrJvZvZTLCDTyQ7l1Oj4",
  authDomain: "react-unity-network-client.firebaseapp.com",
  projectId: "react-unity-network-client",
  storageBucket: "react-unity-network-client.appspot.com",
  messagingSenderId: "490779476883",
  appId: "1:490779476883:web:8331a611bc8da611ae1e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;