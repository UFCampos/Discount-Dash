"use client";
import { useState } from "react";
import Image from "next/image";
import "./Order.css";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { change } from "@/lib/redux/features/orderProduct";
import { useGetOrderQuery } from "@/lib/redux/service/orderApi";
import { count } from "console";

const Order = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.order);

  // const {id} = useSelector((state)=> state.userProfile)

  const id = "6Ks3wWaq8zPnkqGZUhqK";
  const { data, isLoading } = useGetOrderQuery({ id });

  const datos = [
    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 2,
    },
    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 1,
    },
    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 4,
    },

    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 6,
    },
    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 1,
    },
    {
      id: 1,
      name: "cocacola",
      Image: "/hamburguesa.jpg",
      price: 200,
      quantity: 4,
    },
  ];
  const [info, setInfo] = useState(false);

  console.log(data);
  console.log(id);

  const handleStatusChange = () => {
    dispatch(change());
  };

  const handleInfo = () => {
    if (info === false) {
      setInfo(true);
    } else {
      setInfo(false);
    }
  };

  const total = () => {
    let totalPrice = 0;
    datos.forEach((product) => {
      const tot = product.price * product.quantity;
      totalPrice += tot;
    });
    return totalPrice;
  };
  console.log(total);

  return (
    <body className="text-black overflow-x-hidden overflow-y-auto h-screen bg-no-repeat">
      <div className="mx-20">
        <div className="container mx-auto p-4 ">
          {isLoading ? (
            <h1> Is Loading...</h1>
          ) : (
            <div className="card bg-gray-300 p-0 md:p-5 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between px-3 top">
                <div className="flex">
                  <h5 className="relative">YOUR ORDER</h5>
                </div>
                <div className="flex flex-col text-sm-right"></div>
              </div>
              <div className="flex justify-center">
                <div className="col-12"></div>
              </div>
              <div className="flex justify-end flex-grow top mt-1">
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap">
                    {info === false ? (
                      <div className="flex flex-wrap">
                        {datos.slice(0, 4).map((product) => (
                          <div
                            key={product.id}
                            className="w-1/2 p-2 sm:w-1/4 md:w-1/2 lg:w-1/4"
                          >
                            <Image
                              className="rounded"
                              src={product.Image}
                              width={200}
                              height={200}
                              alt="img"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      datos.map((product) => (
                        <div key={product.id} className="mb-4 ml-4" >
                          <div className="bg-white p-2 rounded-lg shadow-md mb-2 flex">
                            <div>
                              <Image
                                className="rounded"
                                width={150}
                                height={150}
                                src={product.Image}
                                alt={product.name}
                              />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center text-center">
                              <h3 className="text-lg font-semibold mb-2 inline-block">
                                {product.name}
                              </h3>
                              <p className="text-gray-700 mb-auto inline-block">
                                Price: ${product.price}
                              </p>
                              <p className="text-gray-700 mt-2 text-center inline-block">
                                Quantity: {product.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <h1 className="text-2xl font-bold mt-4 mb-2 text-center">Total: ${total()}</h1>
                  <div className="flex justify-start mt-2">

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleInfo}
                    >
                    {info === false ? (
                      <h1>More info...</h1>
                      ) : (
                        <h1>less info...</h1>
                        )}
                  </button>
                        </div>
                  <br />
                </div>
                <div className="w-1/2 p-4 justify-center">
                  {/* Contenido de estado a la derecha */}
                  {status.value === "preparation" && (
                    <div className="flex justify-end top mt-2">
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-green-400"
                          src="/canasto1.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Processed</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-line w-1/2 border-t-2 border-transparent my-4 mt-6 mr-1"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 bg-yellow-200 rounded-full"
                          src="/moto3.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order En Route</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-yellow w-1/2 border-t-2 border-transparent my-4 mt-6 mr-3"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-green-000"
                          src="/completo.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Arrived</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {status.value === "On the way" && (
                    <div className="flex justify-end top mt-2">
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-green-400 "
                          src="/canasto1.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Processed</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 bg-green-400 rounded-full"
                          src="/moto3.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order En Route</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-line w-1/2 border-t-2 border-transparent my-4 mt-6 mr-3"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-yellow-200"
                          src="/completo.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Arrived</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {status.value === "Delivered" && (
                    <div className="flex justify-end top mt-2">
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-green-400 "
                          src="/canasto1.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Processed</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 bg-green-400 rounded-full"
                          src="/moto3.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order En Route</p>
                        </div>
                      </div>
                      <div className="line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"></div>
                      <div className="flex flex-col items-center icon-content">
                        <Image
                          className="w-14 h-14 mr-3 rounded-full bg-green-400"
                          src="/completo.svg"
                          alt=""
                          width={300}
                          height={300}
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">Order Arrived</p>
                        </div> 
                      </div>
                    </div>
                  )}
                  <div className="flex justify-end mt-2">

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
                    onClick={handleStatusChange}
                    >
                    Change Status
                  </button>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </body>
  );
};

export default Order;
