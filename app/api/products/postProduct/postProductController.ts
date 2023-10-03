import { addDoc, collection, Timestamp  } from "firebase/firestore"
import { db } from "@/firebase/config"

export const controller = (name: string, brand: string, price:string, stock:string, image:string, originalPrice:string, expirationDate:string, userId:string) => {
    const expirationTimestamp = Timestamp.fromDate(new Date(expirationDate))
    
    
    addDoc(collection(db, "products"), {
        userId,
        name,
        nameToLowerCase: name.toLowerCase(),
        brand,
        originalPrice: parseInt(originalPrice),
        price: parseInt(price),
        stock: parseInt(stock),
        expirationDate: expirationTimestamp,
        image

    })
}