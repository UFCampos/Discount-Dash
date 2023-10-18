"use client";
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
import style from "./Card.module.css";
import {
  useNewFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/lib/redux/service/favoritesAPI";
import { addFavorite } from "@/lib/redux/features/FavoriteSlice";
import { useGetAllFavoritesQuery } from "@/lib/redux/service/favoritesAPI";

const Card: React.FC<CardProduct> = ({
  itemId,
  name,
  brand,
  image,
  price,
  stock,
  normalPrice,
  has,
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

  const { data: dataFavorite } = useGetAllFavoritesQuery({ id });
  const { favorites } = useSelector((state) => state.favorites);

  const ids = dataFavorite?.map((favorite: any) => favorite?.productId);

  useEffect(() => {
    if (ids?.includes(itemId)) {
      setFlag(true);
      has = true;
    }

    if (has === true) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [dataFavorite]);

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
    if (flag === false || has === false) {
      setFlag(true);
      postFavorite({
        userId: id,
        productId: itemId,
      });
      dispatch(addFavorite(product));
    } else {
      setFlag(false);
      has = false;
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
    <div className={style.card}>
      <div>
        {has === false || flag === false ? (
          <button
            onClick={handleAddFavorite}
            className="material-symbols-outlined text-center"
            id={style.fav}
          >
            favorite
          </button>
        ) : (
          <button
            onClick={handleAddFavorite}
            className="material-symbols-outlined text-center text-red-500"
            id={style.fav}
          >
            favorite
          </button>
        )}
      </div>
      <div className={style.cardImg}>
        <img src={image} />
      </div>

      <div className={style.cardInfo}>
        <Link href={`home/product/${itemId}`}>
          <h3 className="text-center">{name}</h3>
        </Link>
        <div className={style.rate}>
          <p> ⭐ 4.5</p>
          <p>{brand}</p>
        </div>
        <div className={style.price}>
          <p className={style.total}>$ {normalPrice}</p>
          <p>$ {price}</p>
        </div>
      </div>
      <div className={style.cardBuy}>
        <div className={style.buy} onClick={handleBuy}>
          <p>Buy</p>
        </div>
        <div className={style.cart}>
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
