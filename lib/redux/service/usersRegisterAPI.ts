import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

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
            })
        }
    )
})

export const {usePostUserMutation} =userApi