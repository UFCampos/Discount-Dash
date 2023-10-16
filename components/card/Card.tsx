"use client";
import "./Card.css";
import Link from "next/link";
import axios from "axios";
import { useAddProductCartMutation } from "@/lib/redux/service/cartProductsAPI";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { addCart } from "@/lib/redux/features/cartItemsSlice";
import { useEffect, useState } from "react";
import {
  productPayment,
  productPaymentId,
} from "@/lib/redux/features/paymentSlice";
import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { CardProduct } from "@/utils/types";
import {
  useNewFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/lib/redux/service/favoritesAPI";

const Card: React.FC<CardProduct> = ({
  itemId,
  name,
  brand,
  image,
  price,
  stock,
  normalPrice,
}) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.payments.productPayment);

  const paymentId = useSelector((state) => state.payments.paymentId);

  const [mutate] = useAddProductCartMutation();

  const [flag, setFlag] = useState(false);

  const { id } = useSelector((state) => state.userProfile);
  const { cartItems } = useSelector((state) => state.cartItems);
  const { data } = useGetProductsCartQuery({ id });
  const userCode = id;

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductQuery({ id: itemId });

  const handleAddCart = () => {
    mutate({
      cartItemId: itemId,
      userId: id,
      value: "add",
    });
    dispatch(addCart(product));
  };

  const [postFavorite] = useNewFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const handleAddFavorite = () => {
    if (!flag) {
      setFlag(true);
      postFavorite({
        userId: id,
        productId: itemId,
      });
    } else {
      setFlag(false);
      deleteFavorite({
        userId: id,
        productId: itemId,
      });
    }
  };

  const createPreference = async () => {
    try {
      const URL = ``;
      const response = await axios.post(`${URL}/api/products/buyProduct`, {
        itemId,
        description: name,
        price,
        quantity: 1,
        userCode,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();

    if (id) {
      dispatch(
        productPayment({
          image: image,
          name: name,
          price: price,
          brand: brand,
        })
      );

      dispatch(productPaymentId(id));
    }
  };
  return (
    <div className="card flex flex-col">
      <div>
        {!flag ? (
          <button
            onClick={handleAddFavorite}
            className="material-symbols-outlined text-center"
          >
            favorite
          </button>
        ) : (
          <button
            onClick={handleAddFavorite}
            className="material-symbols-outlined text-center text-red-500"
          >
            favorite
          </button>
        )}
      </div>
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
          <p className="total">$ {normalPrice}</p>
          <p>$ {price}</p>
        </div>
      </div>
      <div className="card-buy flex flex-row justify-evenly items-center">
        <div className="buy" onClick={handleBuy}>
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
