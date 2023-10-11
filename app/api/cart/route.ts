import {db} from '@/firebase/config';
import {collection, getDocs, doc, getDoc} from 'firebase/firestore';
import {type NextRequest, NextResponse} from 'next/server';

export const GET = async (req: NextRequest) => {
	const userId: any = req.nextUrl.searchParams.get('id');
	const itemSnapshot = await getDocs(collection(db, 'users', userId, 'cart'));

	// Get all items from the items collection
	const items = itemSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));

	return NextResponse.json(items);
};
