import {updateDoc, doc} from 'firebase/firestore';
import {db} from '@/firebase/config';

export const controller = async (
	productId: string,
	stock: number,
	name: string,
	brand: string,
	price: string,
	image: string,
) => {
	const docRef = doc(db, 'products', productId);
	await updateDoc(docRef, {
		stock,
		name,
		brand,
		price,
		image,
	});
};
