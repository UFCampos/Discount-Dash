import { db } from "@/firebase/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest) => {
    const userId : any = req.nextUrl.searchParams.get("id");
    const cartRef = doc(collection(db, "users", userId, "cart"));
    const {id} = await getDoc(cartRef);

    console.log(id);
    
    const itemSnapshot = await getDocs(collection(db, "users", userId, "cart", "49fyGk4egg8Q0rqossyn", "items"));

    //get all items from the items collection
    const items = itemSnapshot.docs.map((doc) => doc.data());
    
    return NextResponse.json({cart: items});
}
