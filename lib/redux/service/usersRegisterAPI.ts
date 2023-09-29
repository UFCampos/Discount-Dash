import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const {NEXT_PUBLIC_BASE_URL}=process.env

type User={
    id:string,
    name:string,
    lastaname:string,
    image:string
}
export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`${NEXT_PUBLIC_BASE_URL}/api/users`
    }),
    endpoints:(builder)=>(
        {
            postUser:builder.mutation<User, null>({
                query:(user)=>({
                    url:"/register",
                    method:"POST",
                    body:user
                })
            })
        }
    )
})

export const {usePostUserMutation} =userApi