import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = (
  name: string,
  brand: string,
  price: string,
  expiration: string,
  stock: string,
  normalPrice: string,
  category: string,
  image: string,
  shopId: string,
  description: string
) => {
  const expirationTimestamp = Timestamp.fromDate(new Date(expiration));

  addDoc(collection(db, "products"), {
    shopId,
    name,
    nameToLowerCase: name.toLowerCase(),
    brand,
    category,
    expiration: expirationTimestamp,
    normalPrice: parseInt(normalPrice),
    price: parseInt(price),
    stock: parseInt(stock),
    image,
    description,
    status:"unexpired",
    availability: "available",
  });
};
