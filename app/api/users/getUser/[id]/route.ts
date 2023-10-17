import {type NextRequest, NextResponse} from 'next/server';
import {usersById} from './usersById';

export const GET = async (
	{params}: {params: {id: string}},
) => {
	const userSearched = await usersById(params?.id);
	if ('error' in userSearched) {
		return NextResponse.json(
			{error: userSearched.error},
			{status: userSearched.status},
		);
	}

	return NextResponse.json(userSearched);
};
