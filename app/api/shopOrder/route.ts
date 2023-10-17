import { NextResponse, type NextRequest } from "next/server";
import { Order} from "@/utils/types";
import { getOrder } from "./getOrderUser";
import { getOrderShop } from "./getOrderShop";
export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    const shopId = req.nextUrl.searchParams.get("shopId");
    let orders: Order[] = [];
    if (userId) {
      orders = await getOrder(userId);
    }

    if (shopId) {
      orders = await getOrderShop(shopId);
    }

    return NextResponse.json(orders);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
