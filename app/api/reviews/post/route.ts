import { NextRequest, NextResponse } from "next/server";
import{controller} from "./controller";
import { updateRating } from "../rating/rating";
export const POST = async(req:NextRequest )=>{
 try {
    const  {userId, name, productId, comment, rating} = await req.json();

    await controller(userId, name, productId, comment, rating);
    await updateRating(productId);

    return NextResponse.json({message: 'Review added'});
 } catch (error:any) {
    return NextResponse.json({error: error.message}, {status: 400});
 } 
}