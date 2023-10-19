"use client";
import { ModalEditProduct } from "@/utils/types";
import style from "./ModalEditProduct.module.css";
import {
  useGetProductQuery,
  usePutProductsMutation,
} from "@/lib/redux/service/productsAPI";
import { useState } from "react";

const ModalEditProduct = ({ onClose, productId }: ModalEditProduct) => {
  const [product, setProduct] = useState<any>({
    name: "",
    stock: 0,
    price: 0,
    expiration: "",
  });

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const { data, isLoading } = useGetProductQuery({ id: productId });

  console.log(productId);
  const sendNewProduct = () => {
    console.log(product);
    
    putProducts({
      id : productId,
      name: product.name ,
      stock: product.stock,
      price: product.price,
      expiration: product.expiration,
    });
  }

  const [putProducts] = usePutProductsMutation();

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
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={product.name} onChange={handleChangeProduct}/>
          <label htmlFor="stock">stock: </label>
          <input type="number" onChange={handleChangeProduct} name="stock" value={product.stock}/>
          <label htmlFor="price">Price: </label>
          <input type="number" value={product.price} name="price" onChange={handleChangeProduct}/>
          <label htmlFor="expiration">Expiration: </label>
          <input type="date" onChange={handleChangeProduct} name="expiration" value={product.expiration}/>
        </div>
        <div>
          <button className={style.saveButton} onClick={sendNewProduct}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProduct;
