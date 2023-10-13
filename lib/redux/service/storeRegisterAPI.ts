import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`/api/users/shops`
    }),
    endpoints:(builder)=>(
        {
            postMarket:builder.mutation({
                query:(body)=>({
                    url:"/",
                    method:"POST",
                    body
                })
            })
        }
    )
})

export const { usePostMarketMutation} =userApi