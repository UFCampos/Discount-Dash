import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const deleteFav = async (userId: string, productId: string) => {
  const favoriteRef = doc(db, "users", userId, "favorites", productId);
  await deleteDoc(favoriteRef);
};
