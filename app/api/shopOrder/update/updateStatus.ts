import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
export const handler = async (orderId: string, value: string) => {
  const docRef = doc(db, "orders", orderId);
  await updateDoc(docRef, {
    orderStatus: value,
  });
};
