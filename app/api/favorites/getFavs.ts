import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getFavs = async (id: string) => {
  const favoritesRef = collection(db, "users", id, "favorites");
  const favoritesSnapshot = await getDocs(favoritesRef);
  const favoriteProducts: any = [];

  favoritesSnapshot.forEach((doc) => {
    favoriteProducts.push(doc.data());
  });

  return favoriteProducts;
};
