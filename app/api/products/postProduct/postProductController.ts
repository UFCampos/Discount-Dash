import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = (
  name: string,
  brand: string,
  price: string,
  stock: string,
  category: string,
  image: string,
  shopId: string
) => {
  

  addDoc(collection(db, "products"), {
    shopId,
    name,
    nameToLowerCase: name.toLowerCase(),
    brand,
    category,
    price: parseInt(price),
    stock: parseInt(stock),
    image,
  });
};
