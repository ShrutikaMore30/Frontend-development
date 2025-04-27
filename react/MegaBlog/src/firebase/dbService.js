import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore
import { app } from "./firebaseConfig";  // Make sure you import firebase app
const auth = getAuth(app);
const db = getFirestore(app);

export class FirebaseAuthService {

    // Create Account (Sign Up)
    async createAccount({ email, password, name }) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Store additional user details in Firestore
            const userRef = doc(db, 'users', user.uid); // Corrected the Firestore reference
            await setDoc(userRef, {
                name,
                email,
            });
            return user;
        } catch (error) {
            console.error("Firebase AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    // Login
    async login({ email, password }) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Firebase AuthService :: login :: error", error);
            throw error;
        }
    }

    // Get Current User
    getCurrentUser() {
        return auth.currentUser;
    }

    // Logout
    async logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Firebase AuthService :: logout :: error", error);
            throw error;
        }
    }
}

const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
