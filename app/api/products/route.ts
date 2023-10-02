import { NextResponse, NextRequest } from "next/server";
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name") || "";
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
  const pageSize = parseInt(req.nextUrl.searchParams.get("limit") || "10");

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
  const first = query(productsRef, orderBy("nameToLowerCase"), limit(pageSize));
  let documentSnapshots = await getDocs(first);
  let lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  if (page > 1) {
    const next = query(
      productsRef,
      orderBy("nameToLowerCase"),
      startAfter(documentSnapshots.docs[documentSnapshots.docs.length - 1]),
      limit(pageSize)
    );
    documentSnapshots = await getDocs(next);
  }

  const products: Product[] = documentSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  return NextResponse.json(products);
};
