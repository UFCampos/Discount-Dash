"use client";
import { useGetUserApiQuery } from "@/lib/redux/service/historyApi";
import { useSelector } from "@/lib/redux/hooks";

const UserHistories = () => {
  // const { id } = useSelector((state) => state.userProfile);
  const id = "jTICUPnHSlbGIN9mNj2VomrkWpK2";
  const { data } = useGetUserApiQuery({ id });
  console.log(data);

  return (
    <div>
      <h1>User Histories</h1>
      {data?.map((productHistory: any) => (
        <div key={productHistory.id}>
          {productHistory.products.map((product: any) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt="img"
                width={100}
                height={100}
              />
              <h1>{product.name}</h1>
              <p>Quantity: {product.quantity}</p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
          <p>${productHistory.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default UserHistories;
