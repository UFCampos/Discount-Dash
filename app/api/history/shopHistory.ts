import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export const shopHistory = async (shopId: string) => {
  const ordersCollectionRef = collection(db, "orders");
  const ordersQuery = query(
    ordersCollectionRef,
    where("shopId", "==", shopId),
    where("orderStatus", "==", "Completed")
  );

  const ordersSnapshot = await getDocs(ordersQuery);

  const orders: any = [];
  ordersSnapshot.forEach((orderDoc) => {
    const orderData = orderDoc.data();
    orders.push({
      id: orderDoc.id,
      ...orderData,
    });
  });

  return orders;
};
