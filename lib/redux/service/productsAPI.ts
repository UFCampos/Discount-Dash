import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/utils/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/products",
  }),
  endpoints: (build) => ({
    getResults: build.query<Product[], { name: string }>({
      query: ({ name }) => `?name=${name}`,
    }),
    getProduct: build.query<Product, { id: string }>({
      query: ({ id }) => `/${id}`,
    }),
    newPost: build.mutation({
      query: (body) => ({
        url: "/postProduct",
        method: "POST",
        body,
      }),
    }),
    putProducts: build.mutation({
      query: (body) => ({
        url: `/putProduct?name=${body.name}&price=${body.price}&stock=${body.stock}&expiration=${body.expiration}&id=${body.id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useNewPostMutation,
  useGetResultsQuery,
  useGetProductQuery,
  usePutProductsMutation,
} = productsApi;
