import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";
import { Order } from "@/utils/types";

export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    const shopId = req.nextUrl.searchParams.get("shopId");
    const ordersCollectionRef = collection(db, "orders");
    let queryRef = query(
      ordersCollectionRef,
      where("orderStatus", "!=", "completed")
    );

    if (userId) {
      queryRef = query(queryRef, where("userId", "==", userId));
    }

    if (shopId) {
      queryRef = query(queryRef, where("shopId", "==", shopId));
    }

    const ordersSnapshot = await getDocs(queryRef);

    const orders: any = [];
    ordersSnapshot.forEach((doc) => {
		const orderData = doc.data() ;
      const jsDate = orderData.orderDate.toDate();
      const date = jsDate.toLocaleString();
      orders.push({
        id: doc.id,
        date,
        ...orderData,
      });
    });

    return NextResponse.json(orders);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
