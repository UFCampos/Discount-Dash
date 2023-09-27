import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const createShop = (name: string, adress: string, logo: string) => {
  addDoc(collection(db, "shops"), {
    name,
    adress,
    logo,
  });
};
