import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const userId = req.nextUrl.searchParams.get("id");
    const ordersCollectionRef = collection(db, "orders");
    const queryRef = query(
      ordersCollectionRef,
      where("orderStatus", "!=", "completed"),
      where("userId", "==", userId)
    );
    const ordersSnapshot = await getDocs(queryRef);

    const orders: any = [];
    ordersSnapshot.forEach((doc) => {
      const orderData = doc.data();
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
