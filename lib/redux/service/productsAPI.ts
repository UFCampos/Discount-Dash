import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/products`,
  }),
  endpoints: (build) => ({
    getResults: build.query<any, { name: string }>({
      query: ({ name }) => `?name=${name}`,
    }),
    getProduct: build.query<any, { id: string }>({
      query: ({ id }) => `/${id}`,
    }),
    newPost: build.mutation({
      query: (body) => ({
        url: '/postProduct',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useNewPostMutation, useGetResultsQuery, useGetProductQuery } = productsApi;
