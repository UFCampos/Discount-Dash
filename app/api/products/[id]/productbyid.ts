import {doc, getDoc} from 'firebase/firestore';
import {db} from '@/firebase/config';

export const productById = async (id: string) => {
	try {
		
		const docRef = doc(db, 'products', id);
		
		const productDoc = await getDoc(docRef);
		
		if (productDoc.exists()) {
			const productData = productDoc.data();
			const productWithId = {
				id, 
				...productData, 
			};
			return productWithId;
		}

		
		return {error: 'Product not found', status: 404};
	} catch (error) {
		return {error: 'error al obter el producto', status: 500};
	}
};

