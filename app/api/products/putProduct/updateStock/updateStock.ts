import {doc, updateDoc, increment, getDoc} from 'firebase/firestore';
import {db} from '@/firebase/config';
import {handler} from './handler';

export const updateStock = async (
	userId: string,
	cartItemId: string,
	value: string,
) => {
	const refCartItem = doc(db, 'users', userId, 'cart', cartItemId);
	const cartStock = (await getDoc(refCartItem)).get('quantity');
	const refProduct = doc(db, 'products', cartItemId);

	if (!value) {
		await updateDoc(refProduct, {
			stock: increment(-cartStock),
		});
	} else {
		handler(refProduct, value);
	}
};
