import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export const getCart = async () => {
    const cartSnapshot = await getDocs(collection(db, "cart"));
    const cart = cartSnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(cart);
}