"use client";
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/lib/redux/service/ordersProductsAPI";
import { useState } from "react";
import { setOrderFlag } from "@/lib/redux/features/orderSlice";
import { useDispatch, useSelector } from "@/lib/redux/hooks";

const OrdersProductsShop = () => {
  const [orderStates, setOrderStates] = useState([]);
  const flag = useSelector((state) => state.order.currentFlag);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.userProfile);
  const states = ["Order placed", "In progress", "Completed"].map((state) => {
    return (
      <option value={state} key={state}>
        {state}
      </option>
    );
  });
  const { data, isLoading, isError } = useGetOrdersQuery({ id });
  const [mutate] = useUpdateOrderMutation();

  const handleState = (orderId: string, state: string) => {
    setOrderStates((prevOrderStates) => ({
      ...prevOrderStates,
      [orderId]: state,
    }));
    mutate({
      orderId,
      value: state,
    });
    // dispatch(setOrderFlag(!flag));
  };

  return (
    <div className="orders-products-cont flex flex-col justify-center items-center">
      <h1>Your orders</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((order: any) => (
          <div key={order.id}>
            <p>{order.orderStatus ? order.orderStatus : "Pending"}</p>
            {order.products.map((product: any) => (
              <div key={product.productId} className="flex">
                <h1>{product.name}</h1>
                <img src={product.image} alt="img" width={100} height={100} />
                <p>{product.price}</p>
                <br />
                <br />
              </div>
            ))}
            <select
              name="currentState"
              id="currentState"
              value={orderStates[order.id] || ""}
              onChange={(e) => handleState(order.id, e.target.value)}
            >
              <option value="">state</option>
              {states}
            </select>
            <button
              onClick={() => handleState(order.id, orderStates[order.id])}
            >
              Update state
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersProductsShop;
