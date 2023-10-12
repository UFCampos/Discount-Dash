"use client";
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/lib/redux/service/ordersProductsAPI";
import { useState } from "react";
import { changeState } from "@/lib/redux/features/orderSlice";
import { useDispatch } from "@/lib/redux/hooks";

const OrdersProductsShop = () => {
  const [orderStates, setOrderStates] = useState({});
  const dispatch = useDispatch();
  //   const { id } = useSelector((state) => state.userProfile);
  const states = ["Order placed", "In progress", "Completed"].map((state) => {
    return (
      <option value={state} key={state}>
        {state}
      </option>
    );
  });
  const id = "107892466175771536460";
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
    dispatch(changeState(state));
  };

  console.log(data);

  return (
    <div className="orders-products-cont flex flex-col justify-center items-center  overflow-y-auto">
      <h1 className="font-bold ">Your orders</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((order: any) => (
          <div 
            key={order.id}
            className="border border-gray-500 rounded  p-4 mb-4 w-1/2 pr-4"
          >
            <p>{order.orderStatus ? order.orderStatus : "Pending"}</p>
            {order.products.map((product: any) => (
              <div
                key={product.productId}
                className="flex border border-gray-300 rounded mb-4"
              >
                <div className="w-3/4 pr-4 border-r border-gray-300 ml-2">
                  <h1>{product.name}</h1>
                  <div className="mt-20 font-bold">
                  <p className="mt-1">${product.price}</p>
                  </div>
                </div>
                <div className="w-1/4">
                  <img src={product.image} alt="img" width={100} height={100} />
                </div>
              </div>
            ))}
            <select
              name="currentState"
              id="currentState"
              value={orderStates[order.id] || ""}
              onChange={(e) => handleState(order.id, e.target.value)}
              className="mt-2 border border-gray-300 rounded p-2 mr-5 ml-4"
            >
              <option value="">state</option>
              {states}
            </select>
            <button
             className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
