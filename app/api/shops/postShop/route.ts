import { NextRequest, NextResponse } from "next/server";
import { createShop } from "./createShop";

export const POST = async (req: NextRequest) => {
  const { name, adress, logo } = await req.json();
  if (!name || !adress || !logo) {
    return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
  }

  createShop(name, adress, logo);
  return NextResponse.json({ message: "Shop added" });
};
