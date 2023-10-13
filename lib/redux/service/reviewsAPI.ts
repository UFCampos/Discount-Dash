import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    reducerPath: 'reviewsAPI',
    tagTypes: ['Reviews'],
    endpoints: build => ({
        newReview: build.mutation({
            query: body => ({
                url: '/reviews/post',
                method: 'POST',
                body,
            }),
        }),
        getAllReviews: build.query({
            query: ({productId}) => `/reviews?productId=${productId}`,
        })
    }),
})

export const {useNewReviewMutation, useGetAllReviewsQuery} = reviewsAPI