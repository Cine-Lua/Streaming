import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPKjGsUJww2Pj2m_WgCkjqjBQw4geXYxw",
  authDomain: "cine-lua.firebaseapp.com",
  projectId: "cine-lua",
  storageBucket: "cine-lua.firebasestorage.app",
  messagingSenderId: "657248709971",
  appId: "1:657248709971:web:dbce557e0a5d8033d505a6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);