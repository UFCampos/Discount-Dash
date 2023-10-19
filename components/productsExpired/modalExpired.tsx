"use client";
import { ModalEditProduct } from "@/utils/types";
import style from "./modalExpired.module.css";
import {
  useGetProductQuery,
  useDateChangeMutation,
} from "@/lib/redux/service/productsAPI";
import { useState } from "react";

const ModalExpiredProduct = ({ onClose, productId }: ModalEditProduct) => {
  const [product, setProduct] = useState<any>({
    expiration: "",
  });

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  
  const [putProducts] = useDateChangeMutation();

  const { data, isLoading } = useGetProductQuery({ id: productId });

  const sendNewProduct = () => {
    putProducts({
      id: productId,
      expiration: product.expiration,
    });
  };

  return (
    <div className="modal">
      <div className={style.modalContent}>
        <div className={style.containerTop}>
          <button className={style.closeButton} onClick={onClose}>
            &#215;
          </button>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <h1 className={style.modalTitle}>{data?.name}</h1>
          )}
        </div>
        <div className={style.modalForm}>
          <label htmlFor="expiration">Expiration: </label>
          <input
            type="date"
            onChange={handleChangeProduct}
            name="expiration"
            value={product.expiration}
          />
        </div>
        <div>
          <button className={style.saveButton} onClick={sendNewProduct}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalExpiredProduct;
