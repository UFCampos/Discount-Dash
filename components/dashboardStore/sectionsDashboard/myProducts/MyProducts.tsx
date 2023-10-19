"use client";
import style from "./MyProducts.module.css";
import { useGetStoreProductsQuery } from "@/lib/redux/service/myProductsStoreAPI";
import { useSelector } from "@/lib/redux/hooks";
import Card from "@/components/card/Card";

export const MyProducts = () => {
  const { id } = useSelector((state) => state.userProfile);

  const value = "unexpired";

  const { data, isLoading } = useGetStoreProductsQuery({ id, value });


  return (
    <div className={style.myProductsCont}>
      <div className={style.titleCont}>
        <h1 className="text-3xl">My products</h1>
      </div>
      <div className={style.products}>
        {
          data?.map((item:any)=>{
            return (
              <Card
                  key={item.id}
                  itemId={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  brand={item.brand}
                  stock={item.stock}
                  normalPrice={item.normalPrice}
                  expiration={item.expiration || { seconds: 0, nanoseconds: 0 }}
                />
            )
          })
        }
      </div>
    </div>
  )
};

export default MyProducts;
