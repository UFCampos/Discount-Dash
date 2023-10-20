import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from '@/firebase/admin-config'

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const sessionToken = cookies().get("session")?.value || "";
    const { disabled } = await req.json();
    try {
        if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);

            const sender = await auth.getUser(decodedToken.uid);

            const isAdmin = sender.customClaims?.admin;

            if (isAdmin) {//If sender is admin, then disable given uid
                const uid = params?.id;

                await auth.updateUser(uid, { disabled });

                return NextResponse.json({ message: `User ${uid} is now banned`}, { status: 200 });
            }
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
