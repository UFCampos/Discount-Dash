import { auth } from '@/firebase/admin-config';
import { InitApp, app } from '@/firebase/admin-config';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

// Init the Firebase SDK every time the server is called
InitApp();

export const GET = async (req: NextRequest) => {

    try {
            cookies().delete("session");

            return NextResponse.json({message: 'Logged out'}, { status: 200 });
        

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
