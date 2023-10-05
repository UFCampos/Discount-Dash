import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
      const ordersCollectionRef = collection(db, "orders");
  
    const queryRef = query(
      ordersCollectionRef,
      where("orderStatus", "!=", "completed")
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
    
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 400 });
  }
};
