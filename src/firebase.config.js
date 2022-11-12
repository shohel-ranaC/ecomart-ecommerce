import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6R4GZMFTRARSo80YgSYy1HGozgA1kCtI",
  authDomain: "eco-mart-79c08.firebaseapp.com",
  projectId: "eco-mart-79c08",
  storageBucket: "eco-mart-79c08.appspot.com",
  messagingSenderId: "344145769112",
  appId: "1:344145769112:web:0587372b4b6af1f6cc56ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;