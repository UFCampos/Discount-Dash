import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from '@/firebase/admin-config'

export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const sessionToken = cookies().get("session")?.value || "";
    try {
        if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);

            const sender = await auth.getUser(decodedToken.uid);

            const isAdmin = sender.customClaims?.admin;

            if (isAdmin) {//If sender is admin, then give admin to given uid
                const uid = params?.id;
                const adminAtributes = {
                    admin: true,
                }

                await auth.setCustomUserClaims(uid, adminAtributes);

                return NextResponse.json({ message: `User ${uid} is now admin`}, { status: 200 });
            }
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const sessionToken = cookies().get("session")?.value || "";
    try {
        if (params?.id) {
            const user = await auth.getUser(params?.id);
            return NextResponse.json({ User: user }, { status: 200 });
        }
        if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);
            if (decodedToken) {//If logged in, then send claims
                const user = await auth.getUser(decodedToken.uid);

                return NextResponse.json({ UserClaims: user.customClaims }, { status: 200 });
            }
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
