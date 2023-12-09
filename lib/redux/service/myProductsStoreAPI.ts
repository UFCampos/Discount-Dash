import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const myProductsStoreAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'myProductsStoreAPI',
    tagTypes: ['Store'],
    endpoints: build => ({
        getStoreProducts: build.query({
            query: ({id, value}) => `/users/shops/products?id=${id}&value=${value}`,
        }),
    }),
})

export const {useGetStoreProductsQuery} = myProductsStoreAPI