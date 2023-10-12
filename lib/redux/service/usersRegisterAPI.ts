import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {allDataMarket} from "@/utils/types"

type User={
    id:string,
    name:string,
    lastaname:string,
    image:string
}
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`/api/users`
    }),
    endpoints:(builder)=>(
        {
            postUser:builder.mutation<User, null>({
                query:(body)=>({
                    url:"/register",
                    method:"POST",
                    body
                })
            }),
            postMarket:builder.mutation({
                query:(body)=>({
                    url:"/shops",
                    method:"POST",
                    body
                })
            })
        }
    )
})

export const {usePostUserMutation, usePostMarketMutation} =userApi