import { NextResponse, type NextRequest } from "next/server";
import { controller } from "./controller";

export const POST = async (req: NextRequest) => {
  try {
    const { userId, cartItemId, value } = await req.json();
    await controller(userId, cartItemId, value);
    return NextResponse.json(
      { message: "Product added to cart" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
};
