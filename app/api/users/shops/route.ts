import { NextRequest, NextResponse } from "next/server";
import { controller } from "./createShop";
export const POST = async (req: NextRequest) => {
  try {
    const { id, name, email, logo, adress, shop } = await req.json();
    if (!id || !name || !email || !shop || !adress) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }
    controller(id, name, email, logo, adress, shop);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
