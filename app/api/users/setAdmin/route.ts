import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from '@/firebase/admin-config'

export const POST = async (req: NextRequest) => {
    const sessionToken = cookies().get("session")?.value || "";
    try {
        if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);
            console.log("DECODED TOKEN: ", decodedToken)
            if (decodedToken) {//If logged in, then set admin
                console.log(decodedToken.uid)
                const uid = decodedToken.uid;
                const adminAtributes = {
                    admin: true,
                }

                await auth.setCustomUserClaims(uid, adminAtributes);

                return NextResponse.json({ message: "Admin has been set" }, { status: 200 });
            }
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const GET = async (req: NextRequest) => {
    const sessionToken = cookies().get("session")?.value || "";
    try {
        if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);
            console.log("DECODED TOKEN: ", decodedToken)
            if (decodedToken) {//If logged in, then send claims
                const user = await auth.getUser("RcwcLoHEzVUbWRumNPUzgoQxvUP2");

                return NextResponse.json({ UserClaims: user.customClaims }, { status: 200 });
            }
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
