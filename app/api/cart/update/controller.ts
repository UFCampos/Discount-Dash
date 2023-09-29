import { updateDoc, doc, increment } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (
  userId: string,
  cartItemId: string,
  value: string
) => {
  const docRef = doc(db, "users", userId, "cart", cartItemId);
  if (value === "add")
    await updateDoc(docRef, {
      stock: increment(1),
    });
  else {
    await updateDoc(docRef, {
      stock: increment(-1),
    });
  }
};
