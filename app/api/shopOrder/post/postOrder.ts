import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { ProductOrder } from "@/utils/types";

export const controller = async (id: string, cartQuerySnapshot: any) => {
  const products: ProductOrder[] = [];
  let shopId = "";
  let totalPrice = 0;

  cartQuerySnapshot.forEach((cartItemData: any) => {
    totalPrice += cartItemData.quantity * cartItemData.price;
    shopId = cartItemData.shopId;
    products.push({
      productId: cartItemData.id,
      name: cartItemData.name,
      price: cartItemData.price,
      image: cartItemData.image,
      quantity: cartItemData.quantity,
      total: cartItemData.quantity * cartItemData.price,
    });
  });

  const ordersRef = collection(db, "orders");
  const orderData = {
    products,
    orderDate: serverTimestamp(),
    userId: id,
    shopId,
    totalPrice,
    orderStatus: "Order placed",
  };

  await addDoc(ordersRef, orderData);
};
