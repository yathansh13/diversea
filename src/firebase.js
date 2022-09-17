import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7N3KASHPbCiP_9HyMIFsOqVTIv6bDgl0",
  authDomain: "chatwebapp-6b8fa.firebaseapp.com",
  projectId: "chatwebapp-6b8fa",
  storageBucket: "chatwebapp-6b8fa.appspot.com",
  messagingSenderId: "941518042312",
  appId: "1:941518042312:web:a481a9c211122bd25a61fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
