import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice=createSlice({
    name:"paymentsItems",
    initialState:{
        productPayment:{},
        paymentId:null
    },
    reducers:{
        productPayment:(state, {payload})=>{
            state.productPayment=payload
        },
        productPaymentId:(state, {payload})=>{
            state.paymentId=payload
        }
    }
})

export const {productPayment, productPaymentId}=paymentSlice.actions
export default paymentSlice.reducer