import { db } from "@/firebase/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const userId: any = req.nextUrl.searchParams.get("id");
    const itemSnapshot = await getDocs(collection(db, "users", userId, "cart"));

    const items = itemSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(items);
  } catch (error:any) {
    return NextResponse.json({ error:error.message }, { status: 400 });
  }
};
