import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
export const GET = async (req: NextRequest) => {
  try {
    let userId = req.nextUrl.searchParams.get("userId") || "";
    let productId = req.nextUrl.searchParams.get("productId") || "";


    const reviewsRef = collection(db, "reviews");
    let reviewsSnapshot = await getDocs(reviewsRef);
    const queryRef = query(reviewsRef, where("userId", "==", userId));
    const queryItemRef = query(reviewsRef, where("productId", "==", productId));
    
    if (!productId) {
        console.log(userId)
      reviewsSnapshot = await getDocs(queryRef);
    }else{
    console.log(productId)
    reviewsSnapshot = await getDocs(queryItemRef);
  }
    

    const reviews = reviewsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(reviews);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
