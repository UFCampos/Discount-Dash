import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Query = {
  name: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
};

export const filters = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  reducerPath: "filters",
  tagTypes: ["Filter"],
  endpoints: (build) => ({
    filtersQuery: build.query<any, Query>({
      query: ({ category, minPrice, maxPrice, sort, name }) =>
        `/filter?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&name=${name}`,
    }),
  }),
});

export const { useFiltersQueryQuery } = filters;
