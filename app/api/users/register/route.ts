import { NextResponse, NextRequest } from "next/server";
import { controller } from "./createUser";

export const POST = async (req: NextRequest) => {
    const { name, lastname, email } = await req.json();

    if (!name || !lastname || !email) {
        return NextResponse.json({ error: "Insufficient data" }, {status: 400 });
    }  

    await controller(name, lastname, email);

    return NextResponse.json({message: 'User added'});
}