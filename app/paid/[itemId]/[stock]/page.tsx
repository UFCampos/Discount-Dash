import {db} from '@/firebase/config';
import {doc, updateDoc} from 'firebase/firestore';
const PaidPage = async ({
	params,
}: {
	params: {itemId: string; stock: number};
}) => {
	const {itemId, stock} = params;

	const reference = doc(db, 'products', itemId);

	await updateDoc(reference, {
		stock: stock - 1,
	});

	return <div></div>;
};

export default PaidPage;
