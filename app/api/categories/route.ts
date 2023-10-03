import { NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

export const GET = async () => {
  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const categories = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(categories);
  } catch (error) {
    NextResponse.json({ error: "Category not found" }, { status: 400 });
  }
};
