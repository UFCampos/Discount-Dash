import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { allDataMarket } from "@/utils/types";
import { User } from "@/utils/types";
export const userApi = createApi({
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
            }),
			getUser: builder.query<User, string>({
				query: id => `/users/${id}`,
			})
		}
	),
});

export const {usePostUserMutation, useGetUserQuery, usePostMarketMutation} = userApi