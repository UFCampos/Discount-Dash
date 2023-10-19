"use client";
import style from "./MyProducts.module.css";
import { useGetStoreProductsQuery } from "@/lib/redux/service/myProductsStoreAPI";
import { useSelector } from "@/lib/redux/hooks";
import Card from "@/components/card/Card";
import { usePutProductsMutation } from "@/lib/redux/service/productsAPI";
import { useState } from "react";
import ModalEditProduct from "./ModalEditProduct";

export const MyProducts = () => {
  const [openModal, SetopenModal] = useState(false);
  const [productId, setProductId] = useState("");
  const { id } = useSelector((state) => state.userProfile);
  const value = "unexpired";

  const { data, isLoading } = useGetStoreProductsQuery({ id, value });


  const handleEdit = (productId: string) => {
    setProductId(productId);
    SetopenModal(true);
  };

  return (
    <div className={style.myProductsCont}>
      <div className={style.titleCont}>
        <h1 className="text 4xl">My products</h1>
      </div>
      <div className={style.products}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item: any) => (
            <div key={item.id} className={style.myProduct}>
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
            </div>
          ))
        )}
      </div>
    </div>
  )
};

export default MyProducts;
