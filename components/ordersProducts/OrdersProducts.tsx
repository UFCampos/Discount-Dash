"use client";
import { useSelector } from "@/lib/redux/hooks";
import { useGetOrdersQuery } from "@/lib/redux/service/ordersProductsAPI";

const OrdersProducts = () => {
  //   const { id } = useSelector((state) => state.userProfile);
  const id = "6Ks3wWaq8zPnkqGZUhqK";
  const { data, isLoading, isError } = useGetOrdersQuery({ id });

  console.log(data);

  return (
    <div className="orders-products-cont flex flex-col justify-center items-center">
      <h1>Your orders</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        data?.map((order: any) => (
          <div key={order.id}>
            <h1>{order.products.name}</h1>
            {order.products.map((product: any) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersProducts;
