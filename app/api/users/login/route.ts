import { auth } from 'firebase-admin';
import { InitApp, app } from '@/firebase/admin-config';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Init the Firebase SDK every time the server is called
InitApp();

export const POST = async (req: NextRequest) => {
    const authorization = headers().get("Authorization");
    try {
        if (authorization?.startsWith("Bearer ")) {
            const idToken = authorization.split("Bearer ")[1];
            console.log('TOKEN: ', idToken)
            const decodedToken = await auth().verifyIdToken(idToken);

            if (decodedToken) {
                //Generate session cookie
                const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
                const sessionCookie = await auth().createSessionCookie(idToken, {
                    expiresIn,
                });
                const options = {
                    name: "session",
                    value: sessionCookie,
                    maxAge: expiresIn,
                    httpOnly: true,
                    secure: true,
                };

                //Add the cookie to the browser
                cookies().set(options);
            }
        }

        return NextResponse.json({ message: "Logged in" }, { status: 200 });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 400 });
    }
}


export const GET = async (req: NextRequest) => {
    const session = cookies().get("session")?.value || "";

    //Validate if the cookie exist in the request
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);

    if (!decodedClaims) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    return NextResponse.json({ isLogged: true }, { status: 200 });
}
