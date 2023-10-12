import {db} from '@/firebase/config';
import {
	collection,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore';
import {NextResponse, type NextRequest} from 'next/server';
import {controller} from '../update/controller';

export const POST = async (req: NextRequest) => {
	try {
		const {userId, cartItemId, value} = await req.json();

		const cartDoc = doc(db, 'users', userId, 'cart', cartItemId);
		const cartDocSnapshot = await getDoc(cartDoc);
		if (cartDocSnapshot.exists()) {
			const cartData = cartDocSnapshot.data();
			const quantity = cartData.quantity || 0;
			if (quantity > 0) {
				controller(userId, cartItemId, value);
			}

			return NextResponse.json({message: 'Product added to cart'});
		}

		const cartItemCollection = collection(db, 'users', userId, 'cart');

		const product = await getDoc(doc(db, 'products', cartItemId));
		await setDoc(doc(cartItemCollection, cartItemId), {
			...product.data(),
			quantity: 1,
		});

		return NextResponse.json(
			{message: 'Product added to cart'},
			{status: 201},
		);
	} catch (error: any) {
		return NextResponse.json({error: error.message}, {status: 404});
	}
};
