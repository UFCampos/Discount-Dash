import { NextRequest, NextResponse } from "next/server";
import { deleteFav } from "./deleteFav";

export const DELETE= async(req:NextRequest)=>{
    
    try {
        const {userId, productId} = await req.json();
        if (!productId || !userId) {
            return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
        }
        await deleteFav(userId, productId);
        return NextResponse.json({ message: "Favorite deleted" });
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}