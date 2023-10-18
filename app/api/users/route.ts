import {NextRequest, NextResponse} from 'next/server';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '@/firebase/config';
import { auth } from '@/firebase/admin-config';
import { cookies } from 'next/headers';
import { User } from '@/utils/types';

export const GET = async () => {
	const sessionToken = cookies().get("session")?.value || "";

	try {
		if (sessionToken) { //Verify session cookie
            const decodedToken = await auth.verifySessionCookie(sessionToken, true);

            const sender = await auth.getUser(decodedToken.uid);

            const isAdmin = sender.customClaims?.admin;

            if (isAdmin) {//If sender is admin, then retrieve all users
				
				const listUsersResult = await auth.listUsers();
				const users = listUsersResult.users.map((userRecord) => userRecord.toJSON());

				return NextResponse.json(users, { status: 200 });
            }
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}

	return NextResponse.json({message: "You're not and admin"});
};
