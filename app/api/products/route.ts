import { NextResponse, NextRequest } from "next/server";
import {
  collection,
  getDocs,
  query,
  startAfter,
  limit,
  startAt,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "../../utils";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name");
  const startAfterDocId = req.nextUrl.searchParams.get("startAfterDocId");
  let startAtDocId = req.nextUrl.searchParams.get("startAtDocId");
  const pageSize = 10;
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

  let queryRef: any = collection(db, "products");
  if (startAfterDocId) {
    console.log(startAfterDocId);
    queryRef = query(queryRef, startAfter(startAfterDocId));
  } else if (startAtDocId) {
    queryRef = query(queryRef, startAt(startAtDocId));
  }
  queryRef = query(queryRef, limit(pageSize));

  const productsSnapshot = await getDocs(queryRef);
  const products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));
  const lastDoc = productsSnapshot.docs[productsSnapshot.docs.length - 1];
  const lastDocId = lastDoc ? lastDoc.id : null;
  const firstDoc = productsSnapshot.docs[0];
  const firstDocId = firstDoc ? firstDoc.id : null;
  console.log(products);
  return NextResponse.json(products);
};
