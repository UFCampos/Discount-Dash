import {doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (id: string, name: string, email: string, logo: string, adress: string, shop: string) => {
    const userRef = doc(db, "users", id);
    setDoc(userRef, {
        name,
        email,
        adress,
        logo,
        shop
    })
}