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
      await userHistory(userId);
    }

    await shopHistory(shopId);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
