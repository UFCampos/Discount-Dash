import { db } from "@/firebase/config";
import { deleteDoc, doc, getDoc } from "firebase/firestore";

export const deleteProduct = async (id: string) => {
  const product = await getDoc(doc(db, `products/${id}`));
  if (product.exists()) {
    await deleteDoc(doc(db, `products/${id}`));
    return product.data();
  }
  return { error: "Product not found", status: 404 };
};
