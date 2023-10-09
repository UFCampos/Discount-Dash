import { updateDoc, doc, increment, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { DocumentData } from "firebase-admin/firestore";

export const controller = async (
  userId: string,
  cartItemId: string,
  value: string
) => {
  const docRef = doc(db, "users", userId, "cart", cartItemId);

  const productDoc = await getDoc(docRef);

  if (productDoc.exists()) {
    const productData: DocumentData | undefined = productDoc.data();

    if (productData) {
      if (value === "add") {
        await updateDoc(docRef, {
          quantity: increment(1),
        });
      } else {
        if (productData.quantity === 1) {
          await deleteDoc(docRef);
        }
        if(productData.quantity > 1){
          await updateDoc(docRef, {
            quantity: increment(-1),
          });
  
        }
       
        
      }
    }
  }
};
