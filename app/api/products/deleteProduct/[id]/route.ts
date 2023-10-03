import { NextRequest, NextResponse } from "next/server";
import { deleteProduct } from "./deleteProduct";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const productDeleted = await deleteProduct(params?.id);
  if ("error" in productDeleted) {
    return NextResponse.json(
      { error: productDeleted.error },
      { status: productDeleted.status }
    );
  }
  return NextResponse.json(productDeleted);
};
