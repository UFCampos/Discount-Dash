import { NextResponse, NextRequest } from "next/server";
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name") || "";

  if (name !== "") {
    const response = await productByName(name);

    if ("error" in response) {
      return NextResponse.json(
        { error: response.error },
        { status: response.status }
      );
    }
    return NextResponse.json(response);
  }

  const productsRef = collection(db, "products");

  let documentSnapshots = await getDocs(productsRef);

  let products: Product[] = documentSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  return NextResponse.json(products);
};
