import {NextResponse, type NextRequest} from 'next/server';
import {controller} from './controller';
export const PUT = async (req: NextRequest) => {
	const {name, brand, price, stock, image, productId} = await req.json();
	try {
		if (!name || !brand || !price || !stock || !image) {
			return NextResponse.json({error: 'Insufficient data'}, {status: 400});
		}

		await controller(name, brand, price, stock, image, productId);

		return NextResponse.json({message: 'Product updated'});
	} catch (error: any) {
		return NextResponse.json({error: error.message}, {status: 400});
	}
};
