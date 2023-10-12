import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const addressesAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'addressesAPI',
    tagTypes: ['Put'],
    endpoints: build => ({
        getAddresses: build.mutation({
            query: body => ({
                url: '/users/updateUser',
                method: 'GET',
                body,
            }),
        })
    }),
})

export const { useGetAddressesMutation } = addressesAPI