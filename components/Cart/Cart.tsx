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
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";


const Cart = () => {
  const [productId, setProductId] = useState("");
  const [flag, setFlag] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-38478520-c489-47d5-9e53-f2333cb4ff9b");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userProfile.id);
  const { cartItems } = useSelector((state) => state.cartItems);

  const { data } = useGetProductsCartQuery({ id: userId });

  const [mutate1] = useDelProductCartMutation();
  const handleDelete = (productId: string) => {
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

  const createPreference = async () => {
    try {
      const URL = ``;
      const response = await fetch(`${URL}/api/products/buyProduct`, {
        method: "POST",
        body: JSON.stringify([userId]),
      });
      const { id } = await response.json();
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handlePay = async () => {
    const id = await createPreference();
    setPreferenceId(id);
  };

  let total;

  const totalCart = (cartItems ?? []).reduce((acc, product: any) => {
    const subtotal = parseInt(product.price) * product.quantity;
    return acc + subtotal;
  }, 0);

  useEffect(() => {
    dispatch(addTotalCart(data));
  }, [data]);

  return (
    <div className={style.homeRigthCont}>
        <div className={style.priceCont}>
          <h1 className="text-lg font-bold text-gray-950">
            Total: ${totalCart.toFixed(2)}
          </h1>
        </div>
      <div className={style.cartCont}>
        {cartItems?.map((product: CartProduct, index: number) => {
          return (
            <div
              key={product.id}
              className="flex items-center p-2 mr-2 my-2 ml-2 border border-black rounded shadow backdrop-blur-md bg-gray-50"
            >
              <div className="border border-gray-300 rounded mr-2">
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
              <div className="ml-2 border-black 5">
                <h1 className="text-lg font-bold text-gray-950">
                  {product?.name}
                </h1>
                <p className="text-gray-950">${product?.price}</p>
                <div className="mt-1">
                  <button
                    className="bg-gray-200 hover-bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover-text-gray-800 mr-1"
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
                    className="bg-gray-200 hover-bg-gray-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 hover-text-gray-800 mr-1"
                  >
                    <Image
                      src="/anadir.png"
                      height={3}
                      width={10}
                      alt="image"
                    />
                  </button>
                  <h2 className="text-black text-lg">
                    Total: <span className={style.total}>{total = product?.quantity * product?.price}</span>
                  </h2>
                </div>
              </div>
              {index < cartItems.length - 1 && (
                <hr className="border-gray-300 mx-2" /> // Línea divisoria
              )}
            </div>
          );
        })}

      </div>
      <div className={style.buyCont}>

        <div className={style.walletSection}>
        {preferenceId && (
          <button onClick={() => setPreferenceId(null)}>
              <Wallet
                initialization={{
                  preferenceId,
                  redirectMode: "blank",
                }}
              />
          </button>
          )
        }
        </div>

        <div className={style.buySection}>
          <button onClick={handlePay} className={style.buyButton}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
