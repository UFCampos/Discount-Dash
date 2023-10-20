import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { allDataMarket } from "@/utils/types";
import { type User } from "@/utils/types";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
  }),
  endpoints: (build) => ({
    postUser: build.mutation<User, null>({
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
    getUser: build.query<User, { id: string }>({
      query: ({ id }) => `/${id}`,
    }),
    postAdmin: build.mutation<any, { id: string, admin: boolean }>({
      query: (body) => ({
        url: `/setAdmin/${body.id}`,
        method: "POST",
        body,
      }),
    }),
    banUser: build.mutation<any, { id: string, disabled: boolean }>({
      query: (body) => ({
        url: `/ban/${body.id}`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetUserQuery,
  usePostMarketMutation,
  usePostAdminMutation,
  useBanUserMutation,
} = userApi;
