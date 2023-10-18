import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const changeNameAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'changeNameAPI',
    tagTypes: ['Put'],
    endpoints: build => ({
        changeName: build.mutation({
            query: body => ({
                url: `/users/updateUser?id=${body.id}&name=${body.name}`,
                method: 'PUT',
                body,
            }),
        }),
    })
})

export const { useChangeNameMutation } = changeNameAPI
