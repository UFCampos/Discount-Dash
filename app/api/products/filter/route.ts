import { db } from "@/firebase/config";
import { collection, query, orderBy, where, getDocs, CollectionReference } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { filters } from "./filterProduct";
import { Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  
  let name = req.nextUrl.searchParams.get("name") || "";
  let price = req.nextUrl.searchParams.get("price") || "";
  let category = req.nextUrl.searchParams.get("category") || "";
  let order = req.nextUrl.searchParams.get("order") || "";
  let storeType = req.nextUrl.searchParams.get("storeType") || "";
  
  let queryRef: CollectionReference = collection(db, "products");

  let productsQuery = query(queryRef);

  if(price || category || storeType || order || name) {
    productsQuery = await filters(name, order, storeType, price, category);
  }

  if (productsQuery.type) {
    const productsSnapshot = await getDocs(productsQuery);

    const products: Product[] = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Product),
    }))

    return NextResponse.json(products);
  }
};
