"use client";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { Image } from "@nextui-org/react";
const Detail = ({ id } : {id: string}) => {
  const { data, isLoading } = useGetProductQuery({ id });
  console.log(data);

  return (
    <div>
        <h1>{data?.name}</h1>
        <Image src={data?.image} width={350} height={350} alt={data?.name} />
        <p>$ {data?.price}</p>
        <p>{data?.brand}</p>
        <p>vence en 5 dias</p>
    </div>
  );
};

export default Detail;
