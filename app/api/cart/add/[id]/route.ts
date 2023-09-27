import { db } from "@/firebase/config";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest, {params}: {params: {id: string}}) => {
    // Add a document to the "cart" subcollection of "user"
    const {userId, itemId} = await req.json();

    const cartId = params.id;

    
    if (userId && cartId) {
        const cartRef = doc(db, "users/" + userId + "/cart/" + cartId);
        const item = await getDoc(doc(db, "products/" + itemId));
        await addDoc(collection(db, `users/${userId}/cart`), {
            ...item.data(),
            id: item.id
        });
        return NextResponse.json(item.data());
    }

    return NextResponse.json({error: "Not found"}, {status: 404});
}
