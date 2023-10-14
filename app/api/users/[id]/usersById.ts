import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export async function usersById(userId: string) {
  const userRef = await doc(db, `users/${userId}`);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  }

  throw new Error("User not found");
}
