"use client";
import "./Card.css";
import Link from "next/link";
import axios from "axios"
import { useAddProductCartMutation } from "@/lib/redux/service/cartProductsAPI";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { addCart } from "@/lib/redux/features/cartItemsSlice";
import { productPayment, productPaymentId } from "@/lib/redux/features/paymentSlice";
import { useGetProductsCartQuery } from "@/lib/redux/service/cartProductsAPI";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { addTotalCart } from "@/lib/redux/features/cartItemsSlice";
import { CardProduct } from "@/utils/types";

const Card: React.FC<CardProduct> = ({ itemId, name, brand, image, price, stock, normalPrice}) => {

  const dispatch=useDispatch()
  
  const products=useSelector((state)=>state.payments.productPayment)

  const paymentId=useSelector((state)=>state.payments.paymentId)


  const [mutate] = useAddProductCartMutation();
  const { id } = useSelector((state) => state.userProfile);
  const { cartItems } = useSelector((state) => state.cartItems);
  const { data } = useGetProductsCartQuery({ id });

  const { data: product, isLoading, isError } = useGetProductQuery(
    { id: itemId },
  )
  
  const handleAddCart = () => {
    console.log(itemId);
    console.log(product); 
    mutate({
      cartItemId: itemId,
      userId: id,
      value: "add",
    })
    dispatch(addCart(product));
  };

  const createPreference=async()=>{
    try {
      const URL = ``
      console.log(URL);
      
      const response=await axios.post(`${URL}/api/products/buyProduct`, {
        itemId:itemId,
        description: name,
        price:price,
        quantity:1
      })
      const {id}=response.data
      return id
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy=async()=>{

    const id=await createPreference()
    
    if(id){
      dispatch(productPayment({
        image:image,
        name:name,
        price:price,
        brand:brand
      }))
      dispatch(productPaymentId(id))
    }
    

  }
  return (
    <div className="card flex flex-col">
      <div className="card-img flex justify-center items-center">
        <img src={image} />
        <p>vence en 5 dias</p>
      </div>
      <div className="card-info flex flex-col">
        <Link href={`home/product/${itemId}`}>
          <h3 className="text-center">{name}</h3>
        </Link>
        <div className="rate flex flex-row justify-center gap-4 items-center">
          <p> ⭐ 4.5</p>
          <p>{brand}</p>
        </div>
        <div className="price flex flex-row justify-center items-center gap-4">
          <p className="total">$ {normalPrice}</p>
          <p>$ {price}</p>
        </div>
      </div>
      <div className="card-buy flex flex-row justify-evenly items-center">
        <div className="buy" onClick={handleBuy}>
          <p>Buy</p>
        </div>
        <div className="cart flex flex-col justify-center items-center">
          <button
            onClick={() => handleAddCart()}
            className="material-symbols-outlined text-center"
          >
            shopping_cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;