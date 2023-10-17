import { type NextRequest, NextResponse } from "next/server";
import { userHistory } from "./userHistory";
import { shopHistory } from "./shopHistory";

export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId") || "";
    const shopId = req.nextUrl.searchParams.get("shopId") || "";

    if (!shopId) {
      const orders = await userHistory(userId);
      return NextResponse.json(orders);
    }
    if (!userId) {
      const orders = await shopHistory(shopId);
      return NextResponse.json(orders);
    }
    const orders = await shopHistory(shopId);

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
