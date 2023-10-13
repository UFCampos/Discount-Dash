import { NextRequest, NextResponse } from "next/server";
import{putComment, putRating} from "./controller";

export const PUT= async(req:NextRequest)=>{
try {
const {itemId, reviewId, comment, rating} = await req.json();
if(comment){
 putComment(itemId, reviewId, comment);
}
if(rating){
putRating(itemId, reviewId, rating);
}
return NextResponse.json({message: 'Review updated'});
}
 catch (error) {
    return NextResponse.json({error}, {status: 400});
}

}