import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export async function usersById(userId: string) {
  const reference = await doc(db, `users/${userId}`);
  const user = await getDoc(reference);
  if (user.exists()) {
    return user.data();
  }
  return { error: "User not found", status: 404 };
}
