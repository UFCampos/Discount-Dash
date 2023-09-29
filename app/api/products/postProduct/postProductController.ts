import { addDoc, collection,  } from "firebase/firestore"
import { db } from "@/firebase/config"

export const controller = (name: string, brand: string, price:string, stock:string, image:string) => {

    const parsedPrice = parseInt(price);
    const parsedStock = parseInt(stock);

    addDoc(collection(db, "products"), {
        name,
        brand,
        price: parsedPrice,
        stock: parsedStock,
        image
    })
}