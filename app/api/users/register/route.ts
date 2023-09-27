import { NextResponse, NextRequest } from "next/server";
import { controller } from "./createUser";

export const POST = async (req: NextRequest) => {
    const { name, lastname, email } = await req.json();

    if (!name || !lastname || !email) {
        return NextResponse.json({ error: "Insufficient data" }, {status: 400 });
    }
<<<<<<< HEAD
    

    await controller(name, lastname, email);
    
=======

    await controller(name, lastname, email);
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca

    return NextResponse.json({message: 'User added'});
}