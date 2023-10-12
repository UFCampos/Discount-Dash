import {type NextRequest, NextResponse} from 'next/server';
import {handler} from './updateStatus';

export const PUT = async (req: NextRequest) => {
	try {
		const {orderId, value} = await req.json();
		if (!orderId || !value) {
			return NextResponse.json({error: 'Insufficient data'}, {status: 400});
		}

		await handler(orderId, value);
		return NextResponse.json({message: 'Order updated'});
	} catch (error) {
		return NextResponse.json({error}, {status: 400});
	}
};
