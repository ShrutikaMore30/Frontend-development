// firebaseService.js
import { getFirestore, collection, addDoc, updateDoc, doc, deleteDoc, getDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";  // Import your firebase app configuration

const db = getFirestore(app);
const storage = getStorage(app);

export class FirebaseService {

    // Create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId,
                createdAt: new Date(),
            });
            return docRef;
        } catch (error) {
            console.error("FirebaseService :: createPost :: error", error);
            throw error;
        }
    }

    // Update Post
    async updatePost(id, { title, content, featuredImage, status }) {
        try {
            const postRef = doc(db, "posts", id);
            await updateDoc(postRef, {
                title,
                content,
                featuredImage,
                status,
            });
        } catch (error) {
            console.error("FirebaseService :: updatePost :: error", error);
            throw error;
        }
    }

    // Delete Post
    async deletePost(id) {
        try {
            const postRef = doc(db, "posts", id);
            await deleteDoc(postRef);
        } catch (error) {
            console.error("FirebaseService :: deletePost :: error", error);
            throw error;
        }
    }

    // Get Post by ID
    async getPost(id) {
        try {
            const postRef = doc(db, "posts", id);
            const docSnap = await getDoc(postRef);
            return docSnap.exists() ? docSnap.data() : null;
        } catch (error) {
            console.error("FirebaseService :: getPost :: error", error);
            throw error;
        }
    }

    // Get All Posts
    async getPosts(queries = []) {
        try {
            const q = query(collection(db, "posts"), ...queries);
            const querySnapshot = await getDocs(q);
            let posts = [];
            querySnapshot.forEach((doc) => {
                posts.push(doc.data());
            });
            return posts;
        } catch (error) {
            console.error("FirebaseService :: getPosts :: error", error);
            throw error;
        }
    }

    // Upload File (Image, etc.)
    async uploadFile(file) {
        try {
            const fileRef = ref(storage, 'uploads/' + Date.now() + '_' + file.name);
            await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(fileRef);
            return downloadURL;
        } catch (error) {
            console.error("FirebaseService :: uploadFile :: error", error);
            throw error;
        }
    }

    // Delete File
    async deleteFile(filePath) {
        try {
            const fileRef = ref(storage, filePath);
            await deleteObject(fileRef);
        } catch (error) {
            console.error("FirebaseService :: deleteFile :: error", error);
            throw error;
        }
    }
}

const firebaseService = new FirebaseService();
export default firebaseService;
