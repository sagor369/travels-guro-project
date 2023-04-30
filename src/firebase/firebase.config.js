// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg2BSNTrTeFR5-1pa-QnQ9XaoP0BC7ZPo",
  authDomain: "travel-guro-projects.firebaseapp.com",
  projectId: "travel-guro-projects",
  storageBucket: "travel-guro-projects.appspot.com",
  messagingSenderId: "171806944122",
  appId: "1:171806944122:web:bee085d74b83ba075fc4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app