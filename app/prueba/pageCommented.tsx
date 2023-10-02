// "use client";
// import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";
// import  postProductCart  from "@/utils/postProductcart";
// import { CartProduct } from "@/utils/types";
// const PruebaCart = () => {
//     const id = '6Ks3wWaq8zPnkqGZUhqK'
//     const itemId = "nMIJrCXawWzl0yNx2Wz"
//     const body = {
//       userId : id,
//       itemId
//     }
        
//     const { data, isLoading } = useGetProductsCartQuery({id} );
//     return (
//         <div>
//             {isLoading && <p>Loading...</p>}
//             {data && data?.map((product: CartProduct) => (
//               <div key={product.name}>
//                 <p>{product?.image}</p>
//                 <p>{product?.name}</p>
//                 <p>{product?.price}</p>
//                 <p>{product?.quantity}</p>
//               </div>
//             ))}
//             {postProductCart(body)}

//         </div>
      
//     );
// }

// export default PruebaCart;
