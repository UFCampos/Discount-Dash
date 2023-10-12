import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

export const controller = async (id: string) => {
  const cartCollectionRef = collection(db, "users", id, "cart");
  const cartQuerySnapshot = await getDocs(cartCollectionRef);

<<<<<<<< HEAD:app/api/shopOrder/post/postOrder.ts
  const products: any = []; 
========
  const products: any = {};
>>>>>>>> 6aed141dc032e9686fea65f7a081cffd01e5a440:app/api/shopOrder/[id]/postOrder.ts
  let shopId = "";
  let totalPrice = 0;

  cartQuerySnapshot.forEach((doc) => {
    const cartItemData = doc.data();
    totalPrice += cartItemData.quantity * cartItemData.price;
    shopId = cartItemData.shopId;
<<<<<<<< HEAD:app/api/shopOrder/post/postOrder.ts

    products.push({
========
console.log(cartItemData.shopId)
    products[cartItemData.name] = {
>>>>>>>> 6aed141dc032e9686fea65f7a081cffd01e5a440:app/api/shopOrder/[id]/postOrder.ts
      productId: doc.id,
      name: cartItemData.name,
      price: cartItemData.price,
      image: cartItemData.image,
      quantity: cartItemData.quantity,
      total: cartItemData.quantity * cartItemData.price,
    };
  });

  const ordersRef = collection(db, "orders");
  const orderData = {
    products,
    orderDate: serverTimestamp(),
    userId: id,
    shopId,
    totalPrice,
    orderStatus: "order placed",
  };

  await addDoc(ordersRef, orderData);
};
