import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { OrderHistory, OrderDataHistory } from "@/utils/types";

export const userHistory = async (userId: string) => {
  const ordersCollectionRef = collection(db, "orders");
  const ordersQuery = query(
    ordersCollectionRef,
    where("userId", "==", userId),
    where("orderStatus", "==", "Completed")
  );

  const ordersSnapshot = await getDocs(ordersQuery);

  const orders: OrderHistory[] = [];
  ordersSnapshot.forEach((orderDoc) => {
    const orderData = orderDoc.data() as OrderDataHistory;

    orders.push({
      id: orderDoc.id,
      ...orderData,
    });
  });

  return orders;
};
