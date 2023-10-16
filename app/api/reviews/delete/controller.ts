import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
export const controller = async (itemId: string, reviewId: string) => {
  const docRef = doc(db, "products", itemId, "reviews", reviewId);

  await deleteDoc(docRef);
};
