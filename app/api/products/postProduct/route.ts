import { NextRequest, NextResponse } from "next/server";
import { controller } from "./postProductController";

export const POST = async (req: NextRequest) => {
    const {name, brand, price, stock, image} = await req.json();
    if (!name || !brand || !price || !stock || !image) {
        return NextResponse.json({ error: "Insufficient data" }, {status: 400 });
    }
    controller(name, brand, price, stock, image);
    return NextResponse.json({message: 'Product added'})
}