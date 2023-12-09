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
                url: '/favorites/post',
                method: 'POST',
                body,
            }),
        }),
        getAllFavorites: build.query({
            query: ({id}) => `/favorites?id=${id}`,
        }),
        deleteFavorite: build.mutation({
            query: body => ({
                url: '/favorites/delete',
                method: 'DELETE',
                body,
            }),
        })
    }),
})

export const { useNewFavoriteMutation, useGetAllFavoritesQuery, useDeleteFavoriteMutation } = favoritesAPI