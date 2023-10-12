import {doc, getDoc} from 'firebase/firestore';
import {db} from '@/firebase/config';

export const productById = async (id: string) => {
	try {
		// Creamos referencia al documento con el id que nos pasan
		const docRef = doc(db, 'products', id);
		// Obtenemos los datos del documento
		const productDoc = await getDoc(docRef);
		// Si el documento existe devolvemos los datos
		if (productDoc.exists()) {
			const productData = productDoc.data();
			const productWithId = {
				id, // Agrega el ID
				...productData, // Agrega los datos del documento
			};
			return productWithId;
		}

		// Si no existe devolvemos un error
		return {error: 'Product not found', status: 404};
	} catch (error) {
		return {error: 'error al obter el producto', status: 500};
	}
};

