"use client";
import style from "./ProductsExpired.module.css";
import { useGetStoreProductsQuery } from "@/lib/redux/service/myProductsStoreAPI";
import { useSelector } from "@/lib/redux/hooks";
import Card from "@/components/card/Card";
import { useState } from "react";
import ModalExpiredProduct from "./modalExpired";

export const ProductsExpired = () => {
    const [openModal, SetopenModal] = useState(false);
    const [productId, setProductId] = useState("");
  const { id } = useSelector((state) => state.userProfile);
  const value = "expired";

  const handleEdit = (productId: string) => {
    setProductId(productId);
    SetopenModal(true);
  };

  const { data, isLoading } = useGetStoreProductsQuery({ id, value });

  return (
    <div className={style.myProductsCont}>
      <h1>My products Expired</h1>
      <div className={openModal ? style.modal : ''}>
        {openModal ? (
          <ModalExpiredProduct
            isOpen={openModal}
            productId={productId}
            onClose={() => SetopenModal(false)}
          />
        ) : null}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item: any) => (
          <div key={item.id} className={style.myProduct}>
            <div>
              <button className="pencil-button" onClick={() => handleEdit(item.id)}>✏️ Editar</button>
            </div>
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
  );
};

export default ProductsExpired;
