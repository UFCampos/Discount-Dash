import {type DocumentReference} from 'firebase/firestore';
import {updateDoc, increment} from 'firebase/firestore';

export const handler = async (refProduct: DocumentReference, value: string) => {
	const newStock = value === 'add' ? -1 : 1;
	await updateDoc(refProduct, {
		stock: increment(newStock),
	});
};
