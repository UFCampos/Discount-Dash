import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
export const GET = async (req: NextRequest) => {
  try {
    const { itemId, userId } = await req.json();

    const reviewsRef = collection(db, "reviews");
    let reviewsSnapshot = await getDocs(reviewsRef);
    const queryRef = query(reviewsRef, where("userId", "==", userId));
    const queryItemRef = query(reviewsRef, where("itemId", "==", itemId));
    if (userId) {
      reviewsSnapshot = await getDocs(queryRef);
    }

    reviewsSnapshot = await getDocs(queryItemRef);

    const reviews = reviewsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
