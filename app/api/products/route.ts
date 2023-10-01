import { NextResponse, NextRequest } from "next/server";
import { collection, getDocs, } from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name") || "";

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

  

  const productsSnapshot = await getDocs(collection(db, "products"));

  const products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  return NextResponse.json(products);
};
