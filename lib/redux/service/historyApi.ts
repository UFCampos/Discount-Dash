import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const historyApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'historyApi',
    tagTypes: ['Get'],
    endpoints: build => ({
        getUserApi: build.query({
            query: ({id}) => `/history?userId=${id}`,
        }),
        getShopApi: build.query({
            query: ({id}) => `/history?shopId=${id}`,
        }) 
    }),
})

export const {useGetUserApiQuery, useGetShopApiQuery} = historyApi;