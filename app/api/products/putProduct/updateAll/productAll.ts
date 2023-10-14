import { updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export const putName = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    name: value,
    nameToLowerCase: value.toLowerCase(),
  });
};

export const putCategory = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    image: value,
  });
};

export const putStock = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    stock: parseInt(value),
  });
};
export const putPrice = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    price: parseInt(value),
  });
};

export const putNormalPrice = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    normalPrice: parseInt(value),
  });
};

export const putImage = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    image: value,
  });
};

export const putExpiration = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);
  const expirationTimestamp = Timestamp.fromDate(new Date(value));
  
  await updateDoc(docRef, {
    expiration: expirationTimestamp,
    
  });
};

export const putDescription = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    description: value,
  });
};

export const putBrand = async (value: string, productId: string) => {
  const docRef = doc(db, "products", productId);

  await updateDoc(docRef, {
    brand: value,
  });
};

export const putRating= async(productId: string, rating: number)=>{
  const docRef = doc(db, "products", productId);
  await updateDoc(docRef, {
    rating: rating
  })
}