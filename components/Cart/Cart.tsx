"use client";
import Image from "next/image";
import style from "./Carts.module.css";
import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";
import { useSelector } from "@/lib/redux/hooks";

const Cart = () => {
  const id = useSelector((state) => state.userProfile.id);
  const { data } = useGetProductsCartQuery({ id });
  console.log(id);

  const addItemCart = (id) => {
    
  }

  return (
    <div className={style.homeRigthCont}>
      <div className="max-w-md mx-auto overflow-y-auto overflow-hidden">
        {data?.length === 0 ? (
          <h1>Empty</h1>
        ) : (
          data?.map((product, index) => (
            <div
              key={product.id}
              className="flex items-center p-2 mr-2 my-2 ml-2 border border-black rounded shadow backdrop-blur-md bg-gray-50 "
            >
              <div className="border border-gray-300 rounded mr-2 ">
                <Image
                  src="/images.jpg"
                  alt="Product Image"
                  height={80}
                  width={80}
                />
              </div>
              <div
                className="ml-2 border-black
                 5"
              >
                <h1 className="text-lg font-bold text-gray-950">
                  {product.name}
                </h1>
                <p className="text-gray-950">${product.price}</p>
                <div className="mt-1">
                  <button className="bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1">
                    <Image
                      src="/menos3.png"
                      height={8}
                      width={10}
                      alt="image"
                    />
                  </button>
                  <h2 className="inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                    Quantity: {product.quantity}
                  </h2>
                  <button onClick={() => {}} className="bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1">
                    <Image
                      src="/anadir.png"
                      height={3}
                      width={10}
                      alt="image"
                    />
                  </button>
                  <h5 className="text-black text-lg">
                    Total:{" "}
                    <h1 className="font-bold text-lg">
                      ${product.quantity * product.price}
                    </h1>
                  </h5>
                </div>
              </div>
              {index < data.length - 1 && (
                <hr className="border-gray-300 mx-2" /> // Línea divisoria
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Cart;
