import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
    // Add a document to the "cart" subcollection of "user"
    const { userId, itemId } = await req.json();

    try {
        if (userId && itemId) {
            const product = await getDoc(doc(db, "products", itemId));

            const cartItemCollection = collection(db, "users", userId, "cart")

            const item = await setDoc(doc(cartItemCollection, itemId), {
                ...product.data(),
                quantity: 1,
                total: product.data()?.price,
            });

            return NextResponse.json({ message: "Producto añadido con éxito al carrito" }, { status: 201 });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
