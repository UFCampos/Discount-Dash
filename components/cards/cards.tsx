"use client";
import { useSelector } from "@/lib/redux/hooks";
import {Card} from "../card/Card"
import "./cards.css"
const Cards = () => {
  type Item = {
    name: string;
    image: string;
    price: string;
  };

  const data = useSelector((state) => state.items.products);
  const error = useSelector((state) => state.items.errorsItems);
  const loading = useSelector((state) => state.items.isLoadItems);

  console.log(data)
  return (
    <section className="cards flex flex-col items-center justify-center">
      {/* Animacion de carga para el componente Cards */}
      {
        loading ? (
          <div className="">
            <img src="https://cdn.discordapp.com/attachments/1149956577432969296/1156317467535228968/loading.gif?ex=6514880f&is=6513368f&hm=5661d01e20f1acc0d366a706ce07bbf9fca96f42eb563b4eacf41b9814b496d2&"/>
          </div>
      )
      :
      (
        <div className="cards-cont flex flex-wrap justify-center items-center gap-4 p-4">
        {error ? (
          <p>Not found</p>
        ) : (
          data?.map((item: Item, index) => {
            return (
              <Card key={index} name={item.name} image={item.image} price={item.price} brand={item.brand} />
            );
          })
        )}
      </div>
      )
    }

      
    </section>
  );
};

export default Cards;

