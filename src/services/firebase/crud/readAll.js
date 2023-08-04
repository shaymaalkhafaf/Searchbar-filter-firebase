import { db } from '../firebase.config';
import { 
  getFirestore, 
  collection, 
  doc,
  addDoc, 
  setDoc, 
  getDocs, 
  serverTimestamp 
} from "firebase/firestore";

export default async (collectionName) => {
    const collectionRef = collection(db, collectionName);
    return await getDocs(collectionRef).then((element) => {
        let data = element.docs.map((doc) => ({ ...doc.data(), id: element.id }));
        // console.log(data);
        return data;
    }).catch((err) => {
        console.log(err);
    })
};