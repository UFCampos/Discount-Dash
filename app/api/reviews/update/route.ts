import { NextRequest, NextResponse } from "next/server";
import{putComment, putRating} from "./controller";

export const PUT= async(req:NextRequest)=>{
try {
const {reviewId, comment, rating} = await req.json();
if(comment){
 putComment( reviewId, comment);
}
if(rating){
putRating( reviewId, rating);
}
return NextResponse.json({message: 'Review updated'});
}
 catch (error) {
    return NextResponse.json({error}, {status: 400});
}

}