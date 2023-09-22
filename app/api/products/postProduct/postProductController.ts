import { addDoc, collection,  } from "firebase/firestore"
import { db } from "@/firebase/config"

export const controller = (name: string, brand: string, price:string, stock:string, image:string) => {
    addDoc(collection(db, "products"), {
        name,
        brand,
        price,
        stock,
        image
    })
}