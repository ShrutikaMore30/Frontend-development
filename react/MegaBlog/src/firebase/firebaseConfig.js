
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDlKNf6RAtc0Z0MAnNeEftfywyyPbndZ2A",
    authDomain: "blog-app-5e92a.firebaseapp.com",
    projectId: "blog-app-5e92a",
    storageBucket: "blog-app-5e92a.firebasestorage.app",
    messagingSenderId: "193310030592",
    appId: "1:193310030592:web:d76790f3050196d11ed1e5",
    measurementId: "G-DQEDFG8QS0"
  };
  

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Storage
const storage = getStorage(app);

// Exporting all necessary instances
export { app, auth, db, storage };
