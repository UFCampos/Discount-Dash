import { NextResponse, NextRequest } from "next/server";
import { controller } from "./postOrder";

export const POST = async (
  req: NextRequest) => {
  try {
<<<<<<<< HEAD:app/api/shopOrder/post/route.ts
    let id = req.nextUrl.searchParams.get("id") || "";
========
    const { id } = params;
    console.log(id);
>>>>>>>> 6aed141dc032e9686fea65f7a081cffd01e5a440:app/api/shopOrder/[id]/route.ts

   
    await controller(id);
    return NextResponse.json({ message: "Order placed" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
