import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/utils/types";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
  }),
  reducerPath: "userApi",
  endpoints: (build) => ({
    postUser: build.mutation<User, any>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    postMarket: build.mutation({
      query: (body) => ({
        url: "/shops",
        method: "POST",
        body,
      }),
    }),
    getUser: build.query<any, {id: string}>({
        query: ({id}) => `/${id}`,
    }),
  }),
});

export const { usePostUserMutation, useGetUserQuery, usePostMarketMutation } = userApi;
