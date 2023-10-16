import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Product = {
  name: string;
  price: string;
  normalPrice: string;
  description: string;
  expiration: string;
  image: string;
  stock: string;
  category: string;
  brand: string;
};

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
  }),
});

export const { useNewPostMutation, useGetResultsQuery, useGetProductQuery } =
  productsApi;
