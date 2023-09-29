import { doc, deleteDoc, getDoc, collection} from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (userId: string, cartItemId: string) => {
  const docRef = doc(db, 'users', userId, 'cart', cartItemId);
  
  await deleteDoc(docRef);
}   ;
