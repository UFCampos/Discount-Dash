import { NextRequest, NextResponse } from "next/server";
import { controller } from "./postFavorite";
export const POST = async (req: NextRequest) => {
  try {
    const { productId, userId } = await req.json();

    if (!productId || !userId) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }
    await controller(userId, productId);
    return NextResponse.json({ message: "Favorite added" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
