import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Order, OrderData } from "@/utils/types";
export const getOrderShop = async (shopId: string) => {
  const ordersCollectionRef = collection(db, "orders");
  let queryRef = query(
    ordersCollectionRef,
    where("orderStatus", "!=", "Completed"),
    where("shopId", "==", shopId)
  );

  const ordersSnapshot = await getDocs(queryRef);

  const orders: Order[] = [];
  ordersSnapshot.forEach((doc) => {
    const orderData = doc.data() as OrderData;
    const jsDate = orderData.orderDate.toDate();
    const date = jsDate.toLocaleString();
    orders.push({
      id: doc.id,
      date,
      ...orderData,
    });
  });

  return orders;
};
