"use client";
import { Image } from "@nextui-org/react";
import style from "./Carts.module.css";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";
import {
  useDelProductCartMutation,
  usePutPrudctCartMutation,
} from "@/lib/redux/service/cartProductsAPI";
import { useSelector } from "@/lib/redux/hooks";
import { CartProduct } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch } from "@/lib/redux/hooks";
import { addCart, addTotalCart } from "@/lib/redux/features/cartItemsSlice";
const Cart = () => {
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userProfile.id);
  const { cartItems } = useSelector((state) => state.cartItems);

  const { data } = useGetProductsCartQuery({ id: userId });

  const { data: product, isLoading, isError } = useGetProductQuery(
    { id: productId },
  )

  const [mutate1] = useDelProductCartMutation();
  const handleDelete = (productId: string) => {
    setProductId(productId);
    mutate1({
      cartItemId: productId,
      userId,
    })
  };

  const [mutate] = usePutPrudctCartMutation();
  const handleAddCart = (productId: string, value: string) => {
    setProductId(productId);
    mutate({
      cartItemId: productId,
      userId,
      value,
    });
  };
  useEffect(() => {
    if (data?.length) {
      dispatch(addTotalCart(data));
    }
    console.log("UserId cambió a: " + userId + ", pero el length es undefined? Length:", data?.length);
    
  }, [data]);

  useEffect(() => {
    if (product) {
      dispatch(addCart(product))
    }
  }, [productId])

  return (
    <div className={style.homeRigthCont}>
      <div className="max-w-md mx-auto overflow-y-auto overflow-hidden">
        {cartItems?.map((product: CartProduct, index: number) => {
          {
            return (
              <div
                key={product.id}
                className="flex items-center p-2 mr-2 my-2 ml-2 border border-black rounded shadow backdrop-blur-md bg-gray-50 "
              >
                <div className="border border-gray-300 rounded mr-2 ">
                  <Image
                    src={product?.image}
                    alt="Product Image"
                    height={80}
                    width={80}
                  />
                </div>
                <button onClick={() => handleDelete(product.id)}>x</button>
                <div
                  className="ml-2 border-black
                 5"
                >
                  <h1 className="text-lg font-bold text-gray-950">
                    {product?.name}
                  </h1>
                  <p className="text-gray-950">${product?.price}</p>
                  <div className="mt-1">
                    <button
                      className="bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1"
                      onClick={() => handleAddCart(product.id, "decrement")}
                    >
                      <Image
                        src="/menos3.png"
                        height={8}
                        width={10}
                        alt="image"
                      />
                    </button>
                    <h2 className="inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                      {product?.quantity}
                    </h2>
                    <button
                      onClick={() => handleAddCart(product.id, "add")}
                      className="bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1"
                    >
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
                        ${product?.quantity * product?.price}
                      </h1>
                    </h5>
                  </div>
                </div>
                {index < cartItems.length - 1 && (
                  <hr className="border-gray-300 mx-2" /> // Línea divisoria
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Cart;
