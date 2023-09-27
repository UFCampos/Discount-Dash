import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartProductsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (build) => ({
    addProductCart: build.mutation({
      query: (body) => ({
        url: `/cart/add/${body.id}`,
        method: "POST",
        body,
      }),
    }),
    getProductsCart: build.query({
      query: ({id}) => `/cart?userId=${id}`,
    }),
    putPrudctCart: build.mutation({
      query: (body) => ({
        url: `/cart/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    delProductCart: build.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
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
