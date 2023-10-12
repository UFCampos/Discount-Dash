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
import { type CartProduct } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch } from "@/lib/redux/hooks";
import { addCart, addTotalCart } from "@/lib/redux/features/cartItemsSlice";
const Cart = () => {
  const [productId, setProductId] = useState("");
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userProfile.id);
  const { cartItems } = useSelector((state) => state.cartItems);

  const { data } = useGetProductsCartQuery({ id: userId });

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductQuery({ id: productId });

  const [mutate1] = useDelProductCartMutation();
  const handleDelete = (productId: string) => {
    // SetProductId(productId);
    mutate1({
      cartItemId: productId,
      userId,
    }).then(() => {
      const newCart = cartItems?.filter((item) => item?.id !== productId);
      dispatch(addCart([]));
      dispatch(addTotalCart(newCart));
    });
  };

  const [mutate] = usePutPrudctCartMutation();
  const handleAddCart = (productId: string, value: string) => {
    setProductId(productId);
    mutate({
      cartItemId: productId,
      userId,
      value,
    });
    if (value === "add") {
      const newCart = cartItems?.map((item) => {
        if (item?.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
      dispatch(addTotalCart(newCart));
    } else {
      const newCart = cartItems?.map((item) => {
        if (item?.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });
      dispatch(addTotalCart(newCart));
    }
  };

  let total;

  const totalCart = (cartItems ?? []).reduce((acc, product: any) => {
    const subtotal = parseInt(product.price) * product.quantity;
    return acc + subtotal;
  }, 0);

  useEffect(() => {
    dispatch(addTotalCart(data));

    console.log(
      "UserId cambió a: " + userId + ", pero el length es undefined? Length:",
      data?.length
    );
    console.log(cartItems);
  }, [data]);

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
                <button
                  onClick={() => {
                    handleDelete(product?.id);
                  }}
                >
                  x
                </button>
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
                      onClick={() => {
                        handleAddCart(product?.id, "decrement");
                      }}
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
                      onClick={() => {
                        handleAddCart(product?.id, "add");
                      }}
                      className="bg-gray-200 hover:bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-800 mr-1"
                    >
                      <Image
                        src="/anadir.png"
                        height={3}
                        width={10}
                        alt="image"
                      />
                    </button>
                    <h2 className="text-black text-lg">
                      Total:{" "}
                      <h1 className="font-bold text-lg">
                        ${(total = product?.quantity * product?.price)}
                      </h1>
                    </h2>
                  </div>
                </div>
                {index < cartItems.length - 1 && (
                  <hr className="border-gray-300 mx-2" /> // Línea divisoria
                )}
              </div>
            );
          }
        })}
        <div className="text-right mt-4">
          <h1 className="text-lg font-bold text-gray-950">
            Total: ${totalCart.toFixed(2)}
          </h1>
        </div>

        <div className="text-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
