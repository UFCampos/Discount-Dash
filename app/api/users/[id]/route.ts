import { type NextRequest, NextResponse } from 'next/server';
import { usersById } from './usersById';

export const GET = async (
	{ params }: { params: { id: string } },
) => {
	try {

		const userSearched = await usersById(params?.id);

		return NextResponse.json(userSearched);

	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 404 },
		);
	}
};
