"use client";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { Image } from "@nextui-org/react";
import "./Detail.css"

const Detail = ({ id } : {id: string}) => {
  const { data, isLoading } = useGetProductQuery({ id });
  console.log(data);

  return (
    <div className="main-detail flex flex-row items-center justify-center">
        <section className="img-detail flex flex-col items-center justify-center">
          <Image src={data?.image} width={450} height={450} alt={data?.name} />
        </section>
        <section className="info-detail">
          <h2 className=" text-3xl text-center py-4">{data?.name}</h2>
          <h3>⭐ {data?.brand}</h3>
          <p>Stock: {data?.stock}</p>
          <p>Price: {data?.price}</p>
        </section>
    </div>
  );
};

export default Detail;
