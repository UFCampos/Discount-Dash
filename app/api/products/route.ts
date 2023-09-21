import { NextResponse, NextRequest } from "next/server";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";

export const GET = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name")
  if (name) {
    const response = await productByName(name);
    if ('error' in response){
      return NextResponse.json({ error: response.error }, {status: response.status});
    }
    return NextResponse.json(response);
  };
  const productsSnapshot = await getDocs(collection(db, "products"));
  const products = productsSnapshot.docs.map((doc) => doc.data());
  return NextResponse.json(products);
  }
  
