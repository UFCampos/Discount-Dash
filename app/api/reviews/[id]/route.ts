import { NextResponse } from "next/server";
import { controller } from "./controller";

export const DELETE= async(
	{params}: {params: {id: string} })=>{
try {
    
const { id} = params;
const reviewId= id;
await controller( reviewId);
 if(!reviewId){
    return NextResponse.json({message: 'Review not found'}, {status: 400});
 }
 return NextResponse.json({message: 'Review deleted'}, {status: 200});
    
} catch (error) {
    return NextResponse.json({error}, {status: 400});
}
}