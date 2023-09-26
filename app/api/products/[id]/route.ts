import { NextRequest, NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { productById } from "./productbyid";
import { error } from "console";

export const GET = async (req:NextRequest,{ params }: { params?: Params }) => {
  if (!params || !params.id) {
    return NextResponse.json({ error: "ID not provided", status: 500 });
  }
  const { id } = params;
  const product = await productById(id);
  return NextResponse.json(product);
};
