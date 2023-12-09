import {type NextRequest, NextResponse} from 'next/server';
import {controller} from './postProductController';

export const POST = async (req: NextRequest) => {
	const {
		name,
		brand,
		price,
		stock,
		image,
		category,
		shopId,
		expiration,
		normalPrice,
		description,

	} = await req.json();
	if (
		!name
    || !brand
    || !price
    || !category
    || !stock
    || !image
    || !shopId
    || !expiration
    || !normalPrice) {
		return NextResponse.json({error: 'Insufficient data'}, {status: 400});
	}

	controller(
		name,
		brand,
		price,
		expiration,
		stock,
		normalPrice,
		category,
		image,
		shopId,
		description,

	);
	return NextResponse.json({message: 'Product added'});
};
