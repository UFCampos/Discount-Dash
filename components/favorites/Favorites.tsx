"use client";
import { useGetAllFavoritesQuery } from "@/lib/redux/service/favoritesAPI";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { addFavorite } from "@/lib/redux/features/FavoriteSlice";
import { useEffect } from "react";
import Card from "../card/Card";
import style from "./Favorites.module.css";

const Favorites = () => {
  const { id } = useSelector((state) => state.userProfile);
  const { data } = useGetAllFavoritesQuery({ id });
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addFavorite(data));
  }, [data]);
  let has = true;
  const handleDelete = (favorite: any) => {
    has = false;
  };

  return (
    <div className={style.favoritesCont}>
      {data?.map((favorite: any) => {
        return (
          <div key={favorite?.id} className="flex flex-row ">
            <Card
              itemId={favorite?.productId}
              name={favorite?.name}
              image={favorite?.image}
              price={favorite?.price}
              brand={favorite?.brand}
              stock={favorite?.stock}
              normalPrice={favorite?.normalPrice}
              has={has}
              expiration={favorite?.expiration}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
