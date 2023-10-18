
import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Product = {
    id: string,
    name:string,
    price:string,
    normalPrice:string,
    description:string,
    expiration:string,
    image:string,
    stock:string,
    category:string,
    brand:string,
}

export const orderShopApi = createApi({
    reducerPath: "orderShopApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `/api`,
    }),
    endpoints: (build)=>({
        getOrder: build.query<Product, {id: string}>({
            query: ({id}) => `/shopOrder?UserId=${id}`
        })
    })
    
})


export const {useGetOrderQuery } = orderShopApi;