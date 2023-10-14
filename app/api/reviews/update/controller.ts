import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export const putComment= async( reviewId: string, comment: string)=>{
const docRef = doc(db,"reviews", reviewId);
 await updateDoc(docRef, {
    comment: comment
 })
}

export const putRating= async(reviewId: string, rating: string)=>{
    const docRef = doc(db,"reviews", reviewId);
    await updateDoc(docRef, {
        rating: rating
    })
}