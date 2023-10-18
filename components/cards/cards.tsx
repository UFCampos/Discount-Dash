"use client";
import { useSelector } from "@/lib/redux/hooks";
import Card from "../card/Card";
import "./cards.css";
import {initMercadoPago} from '@mercadopago/sdk-react';
import { Image } from "@nextui-org/react";
import PaymentModal from "../paymentCardModal/PaymentCardModal";
import { type Item } from "@/utils/types";

const Cards = () => {
  initMercadoPago('TEST-38478520-c489-47d5-9e53-f2333cb4ff9b');
  const paymentOrder = useSelector((state) => state.payments.productPayment);

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
            data?.map((item: Item) => {
              {
                return (
                  <Card
                    key={item.id}
                    itemId={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    brand={item.brand}
                    stock={item.stock}
                    normalPrice={item.normalPrice}
                    expiration={item.expiration || { seconds: 0, nanoseconds: 0 }}
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
