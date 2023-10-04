import { NextResponse, NextRequest } from "next/server";
import { controller } from "./postOrder";

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    await controller(id);
    return NextResponse.json({ message: "Order placed" });
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 400 });
  }
};
