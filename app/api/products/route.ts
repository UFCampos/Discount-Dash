import { NextResponse, NextRequest } from "next/server";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  doc,
  where
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "@/utils/types";
import { logicalDelete } from "./deleteProduct/logicalDelete";

export const GET = async (req: NextRequest) =>  {
  const name = req.nextUrl.searchParams.get("name") || "";

  // Parsing limit query to integer
  const pageLimitString = req.nextUrl.searchParams.get("limit") || "";
  const pageLimit = parseInt(pageLimitString);

  //Getting last visible document--------------
  const lastVisibleId = req.nextUrl.searchParams.get("lastVisibleId") || "";

  const productRef = collection(db, "products");
  const productsRef2 = query(productRef, where("status", "==", "unexpired"), where("availability", "==", "available"));


  const lastVisibleRef = lastVisibleId ?? doc(productRef, lastVisibleId);
  //--------------------------------------------

  const totalProducts = req.nextUrl.searchParams.get("total") || "";
  await logicalDelete();
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
  let productsQuery = query(productsRef2, orderBy("name"));

  if (!isNaN(pageLimit)) {
    productsQuery = query(productsQuery, limit(pageLimit));
    if (lastVisibleId !== "") {
      productsQuery = query(productsQuery, startAfter(lastVisibleRef));
    }
  }

  let productsSnapshots = await getDocs(productsQuery ?? productsRef2);

  let products: Product[] = productsSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  return NextResponse.json(products);
};
