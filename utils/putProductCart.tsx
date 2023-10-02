// "use client";
// import { usePutPrudctCartMutation } from "@/lib/redux/service/cartProductsAPI";
// import { addCartProduct } from "@/lib/redux/features/addProductCartSlice";
// import { useDispatch, useSelector } from "@/lib/redux/hooks";
// import {
//   addToCart,
//   removeFromCart,
// } from "@/lib/redux/features/addProductCartSlice";

// const putPorductCart = (body) => {
//   const dispatch = useDispatch();
//   const quantityState = useSelector(
//     (state) => state.addProductCart.quantityCartID[body.id] || 0
//   );
//   const [mutate, { data, isError }] = usePutPrudctCartMutation();
//   const handleAddCart = async (quantityNumber : number) => {
//     try {
//       await mutate(body);
//       if (quantityState > 0) {
//         dispatch(addToCart({ productId: body.id, quantity: quantityNumber }));
//       }
//       if (quantityState < 0) {
//         dispatch(removeFromCart({ productId: body.id, quantity: - quantityNumber }));
//       }
//       dispatch(addCartProduct(data));
//     } catch (error) {
//       console.error("Error al actualizar el producto:", isError);
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => handleAddCart(-1)}>-</button>
//       <p>{quantityState}</p>
//       <button onClick={() => handleAddCart(1)}>+</button>
//     </div>
//   );
// };

// export default putPorductCart;
