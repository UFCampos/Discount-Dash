import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { NEXT_PUBLIC_BASE_URL } = process.env;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${NEXT_PUBLIC_BASE_URL}/api/products`,
  }),
  endpoints: (build) => ({
    getResults: build.query<any, { name: string }>({
      query: ({ name }) => `?name=${name}`,
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

export const { useNewPostMutation, useGetResultsQuery } = productsApi;
