import {type NextRequest, NextResponse} from 'next/server';

const mercadopago = require('mercadopago');
mercadopago.configure({
	access_token:
    'TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469',
});

export const GET = async (
	req: NextRequest,
	{params}: {params: {preferenceId: string}},
) => {
	const {preferenceId} = params;

	try {
		const response = await mercadopago.preferences.get(preferenceId);
		const paymentId = response.body;
		return NextResponse.json({paymentId});
	} catch (error) {
		return NextResponse.json({error: 'a'}, {status: 400});
	}
};
