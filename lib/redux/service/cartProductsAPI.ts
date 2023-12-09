import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartProductsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  reducerPath: "cartProductsAPI",
  endpoints: (build) => ({
    addProductCart: build.mutation({
      query: (body) => ({
        url: "/cart/add",
        method: "POST",
        body,
      }),
    }),
    getProductsCart: build.query<any, { id: string }>({
      query: ({ id }) => `/cart?id=${id}`,
    }),
    putPrudctCart: build.mutation({
      query: (body) => ({
        url: "/cart/update",
        method: "PUT",
        body,
      }),
    }),
    delProductCart: build.mutation({
      query: (body) => ({
        url: "/cart/delete",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useAddProductCartMutation,
  useGetProductsCartQuery,
  usePutPrudctCartMutation,
  useDelProductCartMutation,
} = cartProductsAPI;
