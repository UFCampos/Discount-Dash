import { db } from "@/firebase/config";
import { collection, query, orderBy, where, getDocs, CollectionReference, DocumentData, Query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { filters } from "./filterProduct";
import { Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {

  let name = req.nextUrl.searchParams.get("name") || "";
  let price = req.nextUrl.searchParams.get("price") || "";
  let category = req.nextUrl.searchParams.get("category") || "";
  let order = req.nextUrl.searchParams.get("order") || "";
  let nameSort = req.nextUrl.searchParams.get("sort") || "";
  let storeType = req.nextUrl.searchParams.get("storeType") || "";

  let queryRef: CollectionReference = collection(db, "products");

  let productsQuery: any = query(queryRef);

  if (price || category || storeType || order) {
    productsQuery = await filters( order, storeType, price, category );
  }

  const productsSnapshot = await getDocs(productsQuery);

  if (productsSnapshot.empty) {
    return NextResponse.json({ error: "No products found" }, { status: 404 });
  }

  let products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }))
  console.log(products);

  if (name !== "") {
    let newProducts = products.filter(product => product.name.toLowerCase().startsWith(name.toLowerCase()));
    if (nameSort !== "") {
      console.log(nameSort);
      switch (nameSort) {

        case "name_asc":
          newProducts = newProducts.sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          })
          break;

        case "name_desc":
            newProducts = newProducts.sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
          break;
      
        default:
          break;
      }
    }
    return NextResponse.json(newProducts)
  }

  if (nameSort !== "") {
    switch (nameSort) {

      case "name_asc":
        products = products.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        })
        break;

      case "name_desc":
        products = products.sort((a, b) => {
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          })
        break;
    
      default:
        break;
    }
  }

  return NextResponse.json(products);

};
