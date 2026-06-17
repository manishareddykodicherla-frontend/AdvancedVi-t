import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig={
    apiKey: "AIzaSyDBqY6GcL4E45yYycCx8o3zOwD_fi3FuAw",
  authDomain: "summarist-app-17041.firebaseapp.com",
  projectId: "summarist-app-17041",
  storageBucket: "summarist-app-17041.firebasestorage.app",
  messagingSenderId: "800802126476",
  appId: "1:800802126476:web:e21282ea9d1df6895a59a9",
  measurementId: "G-WG2RFBYZ42"
};
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)