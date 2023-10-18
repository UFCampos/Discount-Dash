import { NextRequest, NextResponse } from "next/server";
import { updateName, updateLastname, updateEmail, updateAddress, updateImage } from "./updateUser";
import { user } from "@nextui-org/react";

export const PUT = async (
  req: NextRequest) => {

    try {
      
      
  const { address, nameAddress, userId, name, lastname, email, image } = await req.json();
 
   if(name && userId){
   await updateName(userId, name);
   }
   if(lastname && userId){
     await updateLastname(userId, lastname);
   }
   if(image  && userId){
     await updateImage(userId, image);
   }
   if(email && userId){
     await updateEmail(userId, email);
   }
  
   
 
  if(address && nameAddress){
    await updateAddress(userId, address,  nameAddress);
  }
  
    return NextResponse.json({ message: "User updated" });
      
    } catch (error:any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
