import { db } from "@/firebase/config";
import {
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
  
  const collectionRef = collection(db, "reviews");

  const existingReviewQuery = query(
    collectionRef,
    where("userId", "==", userId), where("productId", "==", productId)
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
