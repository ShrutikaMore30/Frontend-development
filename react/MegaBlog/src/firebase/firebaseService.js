// src/firebase/firebaseService.js

import { auth, db, storage } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";

class FirebaseService {
  // Authentication methods
  async createAccount({ email, password, name }) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { uid: user.uid, email: user.email, name };
  }

  async login({ email, password }) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }

  async logout() {
    await signOut(auth);
  }

  async getCurrentUser() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          resolve(null);
        } else {
          resolve({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }); // ✅ Only plain JSON-safe data
        }
      });
    });
  }
  

  // Post CRUD methods
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      slug,
      content,
      featuredImage,
      status,
      userId,
      createdAt: new Date(),
    });
    return { id: docRef.id };
  }

  async updatePost(id, { title, content, featuredImage, status }) {
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, {
      title,
      content,
      featuredImage,
      status,
    });
    return true;
  }

  async deletePost(id) {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
    return true;
  }

  async getPost(id) {
    const postRef = doc(db, "posts", id);
    const docSnap = await getDoc(postRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  async getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  // Storage methods
  async uploadFile(file) {
    const fileRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  }

  async deleteFileFromUrl(fileUrl) {
    const fileRef = ref(storage, fileUrl);
    await deleteObject(fileRef);
  }
// this is added for image storing
  async uploadFileToCloudinary(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "your_upload_preset"); // ⚠️ Replace with your Cloudinary preset
    data.append("cloud_name", "your_cloud_name");       // ⚠️ Replace with your Cloudinary cloud name
  
    const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: data,
    });
  
    const result = await res.json();
    return result.secure_url; // ✅ This is what we use as featuredImage
  }
  
}

const firebaseService = new FirebaseService();
export default firebaseService;
