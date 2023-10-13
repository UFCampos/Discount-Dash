import { NextRequest, NextResponse } from "next/server";
import { controller } from "./controller";

export const DELETE= async(req:NextRequest)=>{
try {
const { itemId, reviewId } = await req.json();
await controller(itemId, reviewId);
 if(!itemId || !reviewId){
    return NextResponse.json({message: 'Review not found'}, {status: 400});
 }
 return NextResponse.json({message: 'Review deleted'}, {status: 200});
    
} catch (error) {
    return NextResponse.json({error}, {status: 400});
}
}