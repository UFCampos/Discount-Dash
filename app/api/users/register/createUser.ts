import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (name: string, lastname: string, email: string) => {
    addDoc(collection(db, "users"), {
        name,
        lastname,
        email
    })
}