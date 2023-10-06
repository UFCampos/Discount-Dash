"use client";
import "./Card.css";
import Link from "next/link";
import { useAddProductCartMutation } from "@/lib/redux/service/cartProductsAPI";
import { useSelector } from "@/lib/redux/hooks";

interface props {
  itemId: string;
  name: string;
  brand: string;
  image: string;
  price: string;
}

const Card: React.FC<props> = ({ itemId, name, brand, image, price }) => {
    const [mutate] = useAddProductCartMutation();
    const { id } = useSelector((state) => state.userProfile);
  const handleAddCart = () => {
    mutate({
      itemId,
      userId: id,
    });
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
          <p>Buy</p>
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
