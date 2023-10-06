"use client";
import "./Card.css";
import Link from "next/link";
import { useAddProductCartMutation } from "@/lib/redux/service/cartProductsAPI";
import { useState } from "react";
import { useDispatch } from "@/lib/redux/hooks";
import { addCartProduct } from "@/lib/redux/features/addProductCartSlice";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { strict } from "assert";

interface props {
  itemId: string;
  name: string;
  brand: string;
  image: string;
  price: string;
}

const Card: React.FC<props> = ({ itemId, name, brand, image, price }) => {
  const [preferenceId, setPreferenceId] = useState("");

  initMercadoPago("PUBLIC_ID");

  const [mutate] = useAddProductCartMutation();
  const handleAddCart = () => {
    mutate({
      itemId,
      userId: "6Ks3wWaq8zPnkqGZUhqK",
    });
  };

  const createPreference = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/products/buyProduct",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            quantity: 1, // Debido a que es una compra rapida, se compra solo 1
          }),
        }
      );

      return await response.json();
    } catch (error) {
      alert(error);
    }
  };

  const handlerBuy = async () => {
    const { id } = await createPreference();
    setPreferenceId(id);
  };

  return (
    <div className="card flex flex-col">
      <div className="card-img flex justify-center items-center">
        <img src={image} />
        <p>vence en 5 dias</p>
      </div>
      <div className="card-info flex flex-col">
        <Link href={`home/product/${itemId}`}>
          <h3 className="text-center">{name}</h3>
        </Link>
        <div className="rate flex flex-row justify-center gap-4 items-center">
          <p> ⭐ 4.5</p>
          <p>{brand}</p>
        </div>
        <div className="price flex flex-row justify-center items-center gap-4">
          <p className="total">$ 5500</p>
          <p>$ {price}</p>
        </div>
      </div>
      <div className="card-buy flex flex-row justify-evenly items-center">
        <div className="buy">
          <button onClick={handlerBuy}>Buy</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
        <div className="cart flex flex-col justify-center items-center">
          <button
            onClick={() => handleAddCart()}
            className="material-symbols-outlined text-center"
          >
            shopping_cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
