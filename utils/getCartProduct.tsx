"use client";
import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";

const getCartProduct = (id) => {
  const { data } = useGetProductsCartQuery({ id });
  console.log(data);
  
  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          <p>{product?.image}</p>
          <p>{product?.name}</p>
          <p>{product?.price}</p>
          <p>{product?.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default getCartProduct;
