import { db } from "@/firebase/config";
import { query, where, collection, getDocs } from "firebase/firestore";
import { putRating } from "../../products/putProduct/updateAll/productAll";
export const updateRating = async (productId: string) => {
  const docRef = collection(db, "reviews");

  const queryRef = query(docRef, where("productId", "==", productId));

  const querySnapshot = await getDocs(queryRef);

  let ratings = 0;
  let totalRatings = 0;
  querySnapshot.forEach((doc) => {
    const ratingData = doc.data();
    ratings += parseInt(ratingData.rating);

    totalRatings += 1;
  });

  const rating = ratings / totalRatings;

  await putRating(productId, rating);
};
