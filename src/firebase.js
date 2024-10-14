import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    projectId: "fir-blog-ab578",
    storageBucket: "fir-blog-ab578.appspot.com",
    messagingSenderId: "588769144177",
    appId: "1:588769144177:web:e0ce27c0d7b1dbd608dad0",
    measurementId: "G-SN7V7DW8F6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
