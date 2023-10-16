import {NextRequest, NextResponse} from 'next/server';
import {getDocs, collection} from 'firebase/firestore';
import {db} from '@/firebase/config';

export const GET = async () => {
	const usersSnapshot = await getDocs(collection(db, 'users'));

	const users = usersSnapshot.docs.map(doc => {
		return {
			id: doc.id,
			...doc.data(),
		};
	});

	return NextResponse.json(users);
};
