import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "@/firebase/config"

export const productByName = async (name: string) => { 
    const productsSnapshot = await getDocs(query(collection(db, "products"), where("name", ">=", name), where("name", "<=", name + "\uf8ff")));
    const products = productsSnapshot.docs.map((doc) => doc.data());
    if (products.length === 0) {
      return {error: "Product not found" , status: 404};
    }
    return products;
}