import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { type Product } from "@/utils/types";

export const productByName = async (name: string) => {
  const productsSnapshot = await getDocs(
    query(
      collection(db, "products"),
      where("nameToLowerCase", ">=", name.toLowerCase()),
      where("nameToLowerCase", "<=", name.toLowerCase() + "\uf8ff")
    )
  );
  const products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));
  if (products.length === 0) {
    return { error: "Product not found", status: 404 };
  }

  return products;
};
