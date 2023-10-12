import {db} from '@/firebase/config';
import {collection, query, where, getDocs} from 'firebase/firestore';

export const handler = async (shopId: string, value: string) => {
	const productsRef = collection(db, 'products');
	let productsQuery = query(productsRef, where('shopId', '==', shopId));

	if (value === 'expired') {
		productsQuery = query(productsQuery, where('status', '==', value));
	}

	const productsSnapshot = await getDocs(productsQuery);

	const products: any = [];

	productsSnapshot.forEach(doc => {
		products.push({
			id: doc.id,
			...doc.data(),
		});
	});

	return products;
};
