import React from "react";
import style from "./Orders.module.css";
import OrdersProductsShop from "@/components/ordersProducts/OrderProductsShop";

export const Orders = () => {
  return (
    <div className={style.ordersCont}>
      <h1>Orders</h1>
      <OrdersProductsShop />
    </div>
  );
};

export default Orders;
