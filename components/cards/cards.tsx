"use client";
import { useSelector } from "@/lib/redux/hooks";
import Card from "../card/Card";
import "./cards.css";
import { Image } from "@nextui-org/react";
import PaymentModal from "../paymentCardModal/PaymentCardModal";

const Cards = () => {
  const paymentOrder = useSelector((state) => state.payments.productPayment);

  type Item = {
    name: string;
    image: string;
    price: string;
    brand: string;
    id: string;
    stock: string;
  };

  const data = useSelector((state) => state.items.products);
  const error = useSelector((state) => state.items.errorsItems);
  const loading = useSelector((state) => state.items.isLoadItems);

  return (
    <section className="cards flex flex-col items-center justify-center">
      {/* Animacion de carga para el componente Cards */}
      {loading ? (
        <div className="">
          <Image src="/loading.gif" alt="Loading" />
        </div>
      ) : (
        <div className="cards-cont flex flex-wrap justify-center items-center gap-4 p-4">
          {error ? (
            <p>Not found</p>
          ) : (
            data?.map((item: Item, index) => {
              {
                return (
                  <Card
                    key={index}
                    itemId={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    brand={item.brand}
                    stock={item.stock}
                  />
                );
              }
            })
          )}
        </div>
      )}
      {paymentOrder.name !== "" ? <PaymentModal /> : null}
    </section>
  );
};

export default Cards;
