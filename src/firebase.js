import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
{/* <><script src="https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js"/>
<script src="https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"/></> */}

const firebaseConfig = {
  apiKey: "AIzaSyDfjSgR5sY9CxYRfaNORlyE7qah5pV_p3I",
  authDomain: "brd-shake-and-juice.firebaseapp.com",
  projectId: "brd-shake-and-juice",
  storageBucket: "brd-shake-and-juice.appspot.com",
  messagingSenderId: "929056674140",
  appId: "1:929056674140:web:1dfd348ad583e64bc97199",
  measurementId: "G-1XHY5R4KS2"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics();
// export default app;
const fireDB = getFirestore(app); //fs var name
// const fireDB = firebase.firestore(); //fs var name
const storage = getStorage(app);
// const storageRef = ref(storage);
export {app ,auth,fireDB,storage};