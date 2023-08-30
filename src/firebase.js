import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6VRkY82dMhxOJ_m5hxBIb9WSL0I4ApWQ",
    authDomain: "my-blog-952dc.firebaseapp.com",
    projectId: "my-blog-952dc",
    storageBucket: "my-blog-952dc.appspot.com",
    messagingSenderId: "854092999322",
    appId: "1:854092999322:web:1e92db5bbb4638b7168d23",
    measurementId: "G-S9TT2M5X5B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
