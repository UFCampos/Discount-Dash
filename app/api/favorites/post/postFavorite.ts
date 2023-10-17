import { db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const controller = async (userId: string, productId: string) => {
  const productRef = doc(db, "products", productId);
  const productDoc = await getDoc(productRef);

  if (productDoc.exists()) {
    const productData = productDoc.data();

    const favoritesRef = doc(db, "users", userId, "favorites", productId);
    await setDoc(favoritesRef, {
      ...productData,
      userId,
      productId
    });
  } else {
    throw new Error("Product not found");
  }
};
