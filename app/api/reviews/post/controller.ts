import { db } from "@/firebase/config";
import {
  doc,
  getDocs,
  addDoc,
  collection,
  where,
  query,
} from "firebase/firestore";

export const controller = async (
  userId: string,
  name: string,
  productId: string,
  comment: string,
  rating: string
) => {
  const docRef = doc(db, "products", productId);
  const collectionRef = collection(docRef, "reviews");

  const existingReviewQuery = query(
    collectionRef,
    where("userId", "==", userId)
  );
  const existingReviewSnapshot = await getDocs(existingReviewQuery);

  if (existingReviewSnapshot.empty) {
    await addDoc(collectionRef, {
      userId,
      name,
      productId,
      comment,
      rating: parseFloat(rating),
    });
  } else {
    throw new Error("Review already exists");
  }
};
