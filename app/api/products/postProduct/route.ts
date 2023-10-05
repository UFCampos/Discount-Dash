import { NextRequest, NextResponse } from "next/server";
import { controller } from "./postProductController";

export const POST = async (req: NextRequest) => {
  const {
    name,
    brand,
    price,
    stock,
    image,
    shopId,
    normalPrice,
    expiration,
    description,
  } = await req.json();
  if (
    !name ||
    !brand ||
    !price ||
    !stock ||
    !image ||
    !shopId ||
    !normalPrice ||
    !expiration
  ) {
    return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
  }
  controller(
    name,
    brand,
    price,
    stock,
    image,
    shopId,
    normalPrice,
    expiration,
    description
  );
  return NextResponse.json({ message: "Product added" });
};
