import { NextResponse, NextRequest } from "next/server";
import { controller } from "./postOrder";

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    console.log(id);

    await controller(id);
    return NextResponse.json({ message: "Order placed" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
