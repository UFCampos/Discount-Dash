"use client";
import { useGetAllFavoritesQuery } from "@/lib/redux/service/favoritesAPI";
import { useSelector } from "@/lib/redux/hooks";
import Card from "../card/Card";

const Favorites = () => {
  const { id } = useSelector((state) => state.userProfile);
  const { data } = useGetAllFavoritesQuery({ id });
  console.log(data);

  return (
    <div>
      <h1>Favorites</h1>
      {data?.map((favorite: any) => {
        return (
          <div key={favorite.id} className="flex flex-row ">
            <Card
              itemId={favorite.productId}
              name={favorite.name}
              image={favorite.image}
              price={favorite.price}
              brand={favorite.brand}
              stock={favorite.stock}
              normalPrice={favorite.normalPrice}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
