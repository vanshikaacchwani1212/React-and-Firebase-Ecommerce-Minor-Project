import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfjSgR5sY9CxYRfaNORlyE7qah5pV_p3I",
  authDomain: "brd-shake-and-juice.firebaseapp.com",
  projectId: "brd-shake-and-juice",
  storageBucket: "brd-shake-and-juice.appspot.com",
  messagingSenderId: "929056674140",
  appId: "1:929056674140:web:1dfd348ad583e64bc97199",
  measurementId: "G-1XHY5R4KS2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics();
// export default app;
const fireDB = getFirestore(); //fs var name
const storage = getStorage();
export {app,auth,fireDB,storage};