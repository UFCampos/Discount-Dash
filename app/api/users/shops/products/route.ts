import { NextRequest, NextResponse } from "next/server";
import { handler } from "./getProducts";

export const GET = async (req: NextRequest) => {
  try {
    const shopId = req.nextUrl.searchParams.get("id");
    const value = req.nextUrl.searchParams.get("value") ?? "";

    if (!shopId) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }
    const products = await handler(shopId, value);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
