import { NextRequest, NextResponse } from "next/server";
import { userHistory } from "./userHistory";
import { shopHistory } from "./shopHistory";

export const GET = async (req: NextRequest) => {
  try {
    let userId = req.nextUrl.searchParams.get("userId") || "";
    let shopId = req.nextUrl.searchParams.get("shopId") || "";

    if (!userId && !shopId) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }

    if (!shopId) {
      let orders = await userHistory(userId);
      return NextResponse.json(orders);
    }

    let orders = await shopHistory(shopId);

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
