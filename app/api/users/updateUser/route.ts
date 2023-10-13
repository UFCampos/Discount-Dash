import { NextRequest, NextResponse } from "next/server";
import { updateName, updateLastname, updateEmail, updateAddress, updateImage } from "./updateUser";

export const PUT = async (
  req: NextRequest) => {

    try {
      let id = req.nextUrl.searchParams.get("id") || "";
      let name = req.nextUrl.searchParams.get("name") || "";
      let lastname = req.nextUrl.searchParams.get("lastname") || "";
      let image = req.nextUrl.searchParams.get("image") || "";
      let email = req.nextUrl.searchParams.get("email") || "";
      
      const { address, nameAddress } = await req.json();
    
  if(name){
  await updateName(id, name);
  }
  if(lastname){
    await updateLastname(id, lastname);
  }
  if(image){
    await updateImage(id, image);
  }
  if(email){
    await updateEmail(id, email);
  }
  if(address && nameAddress){
    await updateAddress(id, address,  nameAddress);
  }
  
    return NextResponse.json({ message: "User updated" });
      
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 400 });
    }
};
