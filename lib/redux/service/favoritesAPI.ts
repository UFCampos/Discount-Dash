import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const favoritesAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'favoritesAPI',
    tagTypes: ['Favorites'],
    endpoints: build => ({
        newFavorite: build.mutation({
            query: body => ({
                url: '/postFavorite',
                method: 'POST',
                body,
            }),
        }),
        getAllFavorites: build.query({
            query: ({id}) => `/favorites/${id}`,
        })
    }),
})

export const { useNewFavoriteMutation, useGetAllFavoritesQuery } = favoritesAPI