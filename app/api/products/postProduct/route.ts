import { NextRequest, NextResponse } from "next/server";
import { controller } from "./postProductController";

export const POST = async (req: NextRequest) => {
  const {
    name,
    brand,
    price,
    stock,
    image,
    category,
    shopId
    
   
  } = await req.json();
  if (
    !name ||
    !brand ||
    !price ||
    !category ||
    !stock ||
    !image ||
    !shopId  )
   {
    return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
  }
  controller(
    name,
    brand,
    price,
    stock,
    image,
    category,
    shopId,
  );
  return NextResponse.json({ message: "Product added" });
};
