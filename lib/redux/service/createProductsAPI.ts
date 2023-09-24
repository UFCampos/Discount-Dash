import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { NEXT_PUBLIC_BASE_URL } = process.env

export const createProductsAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${NEXT_PUBLIC_BASE_URL}/api/products`,
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        newPost: build.mutation({
            query: ( body ) => ({
                url: '/postProduct',
                method: 'POST',
                body: JSON.stringify(body), // Serializa el cuerpo a JSON
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})

export const { useNewPostMutation } = createProductsAPI;