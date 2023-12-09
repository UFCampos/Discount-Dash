import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { FavoriteProduct } from "@/utils/types";

export const getFavs = async (id: string) => {
  const favoritesRef = collection(db, "users", id, "favorites");
  const favoritesSnapshot = await getDocs(favoritesRef);
  const favoriteProducts: Array<FavoriteProduct> = [];

  favoritesSnapshot.forEach((doc) => {
    const favoriteProductData = doc.data() as FavoriteProduct;
    favoriteProducts.push(favoriteProductData);
  });

  return favoriteProducts;
};
