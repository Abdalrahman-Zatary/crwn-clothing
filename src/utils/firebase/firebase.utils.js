import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0giT8BviYmnA3VrRlJYPnPG8cqETjh1I",
  authDomain: "crwn-clothing-az.firebaseapp.com",
  projectId: "crwn-clothing-az",
  storageBucket: "crwn-clothing-az.firebasestorage.app",
  messagingSenderId: "29859969398",
  appId: "1:29859969398:web:9964ff8cf91eb519afa257",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);