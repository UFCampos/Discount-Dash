"use client";
import { useGetOrdersQuery } from "@/lib/redux/service/ordersProductsAPI";

const OrdersProducts = () => {
  //   const { id } = useSelector((state) => state.userProfile);
  const id = "107892466175771536460";
  const { data, isLoading, isError } = useGetOrdersQuery({ id });

	console.log(data);

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
                <img src={product.image} alt="img" width={100} height={100}/>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersProducts;
