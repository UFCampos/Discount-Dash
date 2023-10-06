import React from 'react'
import style from "./paymentCardModal.module.css"
import { Wallet } from '@mercadopago/sdk-react'
import { useSelector, useDispatch } from '@/lib/redux/hooks'
import { initMercadoPago } from "@mercadopago/sdk-react";
import { productPayment, productPaymentId } from '@/lib/redux/features/paymentSlice';
import Image from 'next/image';
const PaymentModal = () => {

  initMercadoPago("APP_USR-02de60df-91f7-40f2-9913-fb7b861b9937")

  const dispatch=useDispatch()

  const preferenceId=useSelector((state)=>state.payments.paymentId)

  const paymentProduct=useSelector((state)=>state.payments.productPayment)

  const {name, image, brand, price}=paymentProduct

  const handleCLose=()=>{
    dispatch(productPayment({}))
    dispatch(productPaymentId(null))
  }

  return (
    <aside className={style.modalPayment}>
        <div className={style.cardPayment}>
          <button className={style.closeButton} onClick={handleCLose}>X</button>
          <img className={style.img} src={image}/>
          <h2 className={style.description}>{name}</h2>
          <p>{brand}</p>
          <p className={style.price}>$ {price}</p>
          {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: "blank"}} />}
        </div>
    </aside>
  )
}
export default PaymentModal