import { type NextRequest, NextResponse } from "next/server";
import { userHistory } from "./userHistory";
import { shopHistory } from "./shopHistory";
import { OrderHistory } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId") || "";
    const shopId = req.nextUrl.searchParams.get("shopId") || "";
    let orders: OrderHistory[] = [];
    if (!shopId) {
      orders = await userHistory(userId);
    }
    if (!userId) {
      orders = await shopHistory(shopId);
    }

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
