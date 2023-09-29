import { NextResponse, NextRequest } from "next/server";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "@/utils/types";
import { filters } from "./filter/route";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name");

  let price = req.nextUrl.searchParams.get("price") || "";
  let category = req.nextUrl.searchParams.get("category") || "";
  let order = req.nextUrl.searchParams.get("order") || "";
  let establecimiento = req.nextUrl.searchParams.get("establecimiento") || "";
  let categories = {price, category, order, establecimiento};
  
  let queryRef: any = collection(db, "products");

  let filteredQuery = query(queryRef);

  if(price || category || establecimiento || order){ {
    filteredQuery= await filters(categories, order, establecimiento, price, category);
  }
  
  
  if (name) {
    const response = await productByName(name);

    if ("error" in response) {
      return NextResponse.json(
        { error: response.error },
        { status: response.status }
      );
    }
    return NextResponse.json(response);
  }

  

  const productsSnapshot = await getDocs(filteredQuery);

  const products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  return NextResponse.json(products);
}  };
