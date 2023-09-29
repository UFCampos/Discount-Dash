import { NextRequest, NextResponse } from "next/server";
import { deleteProduct } from "./deleteProduct";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const productdeleted = await deleteProduct(params?.id);
  if ("error" in productdeleted) {
    return NextResponse.json(
      { error: productdeleted.error },
      { status: productdeleted.status }
    );
  }
  return NextResponse.json(productdeleted);
};
