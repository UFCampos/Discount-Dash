import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export const getCart = async () => {
<<<<<<< HEAD
    //FALTA LA REFERENCIA A USER
=======
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca
    const cartSnapshot = await getDocs(collection(db, "cart"));
    const cart = cartSnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(cart);
}