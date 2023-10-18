import { doc, collection, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (
  userId: string,
  cartItemId: string,
  value: string
) => {
  const cartDoc = doc(db, "users", userId, "cart", cartItemId);
  const cartDocSnapshot = await getDoc(cartDoc);
  if (cartDocSnapshot.exists()) {
    const cartData = cartDocSnapshot.data();
    const quantity = cartData.quantity || 0;
    if (quantity > 0) {
      controller(userId, cartItemId, value);
    }
  }

  const cartItemCollection = collection(db, "users", userId, "cart");

  const product = await getDoc(doc(db, "products", cartItemId));
  await setDoc(doc(cartItemCollection, cartItemId), {
    ...product.data(),
    quantity: 1,
  });
};
