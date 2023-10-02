// 'use client'
// import { useAddProductCartMutation } from "@/lib/redux/service/cartProductsAPI"
// import { addCartProduct } from "@/lib/redux/features/addProductCartSlice"
// import { useDispatch } from "@/lib/redux/hooks"

// const postProductCart = (body) => {
//     const dispatch = useDispatch()
//     const [mutate, { data, isError }] = useAddProductCartMutation()
//     const handleAddCart = async () => {
//         try {
//             await mutate(body)
//             dispatch(addCartProduct(data))
            
//         } catch (error) {
//             console.error("Error al agregar el producto:", isError)
//         }
//     }

//     return (
//         <div>
//             <button onClick={handleAddCart}>Agregar al carrito</button>
//         </div>
//     )

// }

// export default postProductCart