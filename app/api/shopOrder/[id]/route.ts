import { NextResponse, NextRequest } from "next/server";
import { controller } from "./postOrder";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { arrayProducts } = data;

    return NextResponse.json({ message: "Order placed" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
