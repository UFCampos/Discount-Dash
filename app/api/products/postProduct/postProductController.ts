import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = (
  name: string,
  brand: string,
  price: string,
  stock: string,
  image: string,
  normalPrice: string,
  expiration: string,
  shopId: string,
  description: string
) => {
  const expirationTimestamp = Timestamp.fromDate(new Date(expiration));

  addDoc(collection(db, "products"), {
    shopId,
    name,
    nameToLowerCase: name.toLowerCase(),
    brand,
    normalPrice: parseInt(normalPrice),
    price: parseInt(price),
    stock: parseInt(stock),
    expiration: expirationTimestamp,
    image,
    description,
  });
};
