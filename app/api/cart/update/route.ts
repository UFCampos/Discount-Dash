import { type NextRequest, NextResponse } from "next/server";
import { controller } from "./controller";
import { updateStock } from "../../products/putProduct/updateStock/updateStock";
export const PUT = async (req: NextRequest) => {
  try {
    const { userId, cartItemId, value } = await req.json();
    if (!userId || !cartItemId || !value) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }

    await controller(userId, cartItemId, value);
    await updateStock(userId, cartItemId, value);

    return NextResponse.json({ message: "Item updated" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
