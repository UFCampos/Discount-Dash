import {NextResponse, type NextRequest} from 'next/server';
import {controller} from './createUser';

export const POST = async (req: NextRequest) => {
	const {id, name, lastname, email} = await req.json();

	if (!id || !name || !lastname || !email) {
		return NextResponse.json({error: 'Insufficient data'}, {status: 400});
	}

	await controller(id, name, lastname, email);

	return NextResponse.json({message: 'User added'});
};
