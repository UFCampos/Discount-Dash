import { type NextRequest, NextResponse } from "next/server";
import { controller } from "./deleteItemCart";
import { deleteCart } from "./deleteCart";

export const DELETE = async (req: NextRequest) => {
  try {
    const { userId, cartItemId } = await req.json();

    if (!cartItemId) {
      await deleteCart(userId);
      return NextResponse.json({ message: "Cart deleted" });
    }

    await controller(userId, cartItemId);

    return NextResponse.json({ message: "Item deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
