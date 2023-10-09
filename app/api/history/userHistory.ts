import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export const userHistory = async (userId: string) => {
  const ordersCollectionRef = collection(db, "orders");
  const ordersQuery = query(
    ordersCollectionRef,
    where("userId", "==", userId),
    where("orderStatus", "==", "completed")
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
