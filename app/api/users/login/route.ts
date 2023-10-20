import { auth } from "@/firebase/admin-config";
import { InitApp, app } from "@/firebase/admin-config";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
InitApp();

export const POST = async (req: NextRequest) => {
  const authorization = headers().get("Authorization");
  try {
    if (authorization?.startsWith("Bearer ")) {
      const idToken = authorization.split("Bearer ")[1];
      const decodedToken = await auth.verifyIdToken(idToken);

      if (decodedToken) {
        //Generate session cookie
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        const sessionCookie = await auth.createSessionCookie(idToken, {
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
};

export const GET = async (req: NextRequest) => {
  const sessionToken = cookies().get("session")?.value || "";

  try {
    //Verify session cookie
    if (sessionToken) {
      const decodedToken = await auth.verifySessionCookie(sessionToken, true);

      const user = await auth.getUser(decodedToken.uid);

      return NextResponse.json(user, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
