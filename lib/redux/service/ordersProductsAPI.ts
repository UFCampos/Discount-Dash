import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderProductAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    reducerPath: "orderProductAPI",
    tagTypes: ['GetOrders'],
    endpoints: (build) => ({
        getOrders: build.query({
            query: ({id}) => `/shopOrder?id=${id}`,
        }),
    }),
})

export const { useGetOrdersQuery } = orderProductAPI