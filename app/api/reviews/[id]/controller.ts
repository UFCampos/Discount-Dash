import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
export const controller = async (reviewId: string) => {
  const docRef = doc(db,"reviews", reviewId);

  await deleteDoc(docRef);
};
