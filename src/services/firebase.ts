import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqguyVavT88fRLgOgY377T3j8OamW7QIA",
  authDomain: "healthcare-app-3f0a5.firebaseapp.com",
  projectId: "healthcare-app-3f0a5",
  storageBucket: "healthcare-app-3f0a5.appspot.com",
  messagingSenderId: "960527585762",
  appId: "1:960527585762:web:ea891a4aec438954b8e9bb",
  measurementId: "G-J7HB2HTHK4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sendPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export default app;
