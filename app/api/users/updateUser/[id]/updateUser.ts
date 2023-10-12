import {db} from '@/firebase/config';
import {doc, updateDoc} from 'firebase/firestore';

export const updateUser = async (
	id: string,
	name: string,
	lastname: string,
	email: string,
) => {
	if (id.length == 20) {
		const reference = doc(db, `users/${id}`);
		const userData = {
			name,
			lastname,
			email,
		};

		const updated = updateDoc(reference, userData);
		return {updated};
	}

	return {error: 'User not found', status: 404};
};
