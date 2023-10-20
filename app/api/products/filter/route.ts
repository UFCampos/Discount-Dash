import { db } from "@/firebase/config";
import {
  collection,
  query,
  orderBy,
  where,
  getDocs,
  type CollectionReference,
} from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";
import { filters } from "./filterProduct";
import { type Product } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name") || "";
  const price = req.nextUrl.searchParams.get("price") || "";
  const category = req.nextUrl.searchParams.get("category") || "";
  const order = req.nextUrl.searchParams.get("order") || "";
  const nameSort = req.nextUrl.searchParams.get("order") || "";
  const storeType = req.nextUrl.searchParams.get("storeType") || "";

  const queryRef: CollectionReference = collection(db, "products");

  let productsQuery: any = query(queryRef);

  if (price || category || storeType || order) {
    productsQuery = await filters(order, storeType, price, category);
  }

  const productsSnapshot = await getDocs(productsQuery);

  if (productsSnapshot.empty) {
    return NextResponse.json({ error: "No products found" }, { status: 404 });
  }

  let products: Product[] = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Product),
  }));

  if (name !== "") {
    let newProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    if (nameSort !== "") {
      switch (nameSort) {
        case "name_asc":
          newProducts = newProducts.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          );
          break;

        case "name_desc":
          newProducts = newProducts.sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          );
          break;

        default:
          break;
      }
    }

    return NextResponse.json(newProducts);
  }

  if (nameSort !== "") {
    switch (nameSort) {
      case "name_asc":
        products = products.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        break;

      case "name_desc":
        products = products.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
        break;

      default:
        break;
    }
  }

  return NextResponse.json(products);
};
