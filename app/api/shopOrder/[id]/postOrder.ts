import {db} from '@/firebase/config';
import {
	addDoc,
	collection,
	serverTimestamp,
	getDocs,
} from 'firebase/firestore';

export const controller = async (id: string) => {
	const cartCollectionRef = collection(db, 'users', id, 'cart');
	const cartQuerySnapshot = await getDocs(cartCollectionRef);

	const products: any = []; // Utilizamos un array en lugar de un objeto
	let shopId = '';
	let totalPrice = 0;

	cartQuerySnapshot.forEach(doc => {
		const cartItemData = doc.data();
		totalPrice += cartItemData.quantity * cartItemData.price;
		shopId = cartItemData.shopId;

		products.push({
			productId: doc.id,
			name: cartItemData.name,
			price: cartItemData.price,
			image: cartItemData.image,
			quantity: cartItemData.quantity,
			total: cartItemData.quantity * cartItemData.price,
		});
	});

	const ordersRef = collection(db, 'orders');
	const orderData = {
		products,
		orderDate: serverTimestamp(),
		userId: id,
		shopId,
		totalPrice,
		orderStatus: 'order placed',
	};

	await addDoc(ordersRef, orderData);
};
