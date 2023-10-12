import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Query = {
  name: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  storeType:string;
  order: string;
};

export const filters = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  reducerPath: "filters",
  tagTypes: ["Filter"],
  endpoints: (build) => ({
    filtersQuery: build.query<any, Query>({
      query: ({ category, minPrice, maxPrice, order, name, storeType }) =>
        `/products/filter?category=${category}&price=${minPrice}-${maxPrice}&order=${order}&name=${name}&storeType=${storeType}`,
    }),
    
  }),
});

export const { useFiltersQueryQuery } = filters;
