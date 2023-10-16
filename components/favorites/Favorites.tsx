"use client";
import { useGetAllFavoritesQuery } from "@/lib/redux/service/favoritesAPI";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { addFavorite } from "@/lib/redux/features/FavoriteSlice";
import { useEffect } from "react";
import Card from "../card/Card";

const Favorites = () => {
  const { id } = useSelector((state) => state.userProfile);
  const { data } = useGetAllFavoritesQuery({ id });
  const {favorites} = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addFavorite(data));
  }, [data]);
  let has = true
  const handleDelete = (favorite: any) => {
    has = false
  }
  console.log(data);

  return (
    <div>
      <h1>Favorites</h1>
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
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
