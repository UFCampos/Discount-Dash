import { db } from "@/firebase/config";
import {
  collection,
  updateDoc,
  doc,
  getDocs,
  Timestamp,
  query,
  where,
} from "firebase/firestore";
export const logicalDelete = async () => {
  const currentDate = Timestamp.now();

  const productsRef = collection(db, "products");
  const queryExpired = query(productsRef, where("expiration", "<", currentDate));
  const  queryOutofStock = query(productsRef, where("stock", "<", 1));
  const queryUnexpired = query(productsRef, where("expiration", ">", currentDate));
  const queryAvailable= query(productsRef, where("stock", ">", 1));

  const querySnapshot = await getDocs(queryExpired);
  querySnapshot.forEach((product) => {
    const productRef = doc(productsRef, product.id);
    updateDoc(productRef, {
      status: "expired",
    });
  });

  const querySnapshot2 = await getDocs(queryOutofStock);
  querySnapshot2.forEach((product) => {
    const productRef = doc(productsRef, product.id);
    updateDoc(productRef, {
      availability: "out of stock",
    });
  });
  const querySnapshotUnexpired = await getDocs(queryUnexpired);
  querySnapshotUnexpired.forEach((product) => {
    const productRef = doc(productsRef, product.id);
    updateDoc(productRef, {
      status: "unexpired",
    });
  });
  
const querySnapshotAvailable = await getDocs(queryAvailable);
querySnapshotAvailable.forEach((product) => {
  const productRef = doc(productsRef, product.id);
  updateDoc(productRef, {
    availability: "available",
  });
})



};




