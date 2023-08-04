import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA8inIzoO71nuPDfH0ZED__OppLmbBkiYw",
  authDomain: "blukers-development.firebaseapp.com",
  databaseURL: "https://blukers-development-default-rtdb.firebaseio.com",
  projectId: "blukers-development",
  storageBucket: "blukers-development.appspot.com",
  messagingSenderId: "25989559034",
  appId: "1:25989559034:web:35c2b3dcc69e1b5564cf43",
  measurementId: "G-VF3H4N4HV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase_app = app;
export const storage = getStorage(firebase_app);
export const db = getFirestore(firebase_app);
// const analytics = getAnalytics(app);