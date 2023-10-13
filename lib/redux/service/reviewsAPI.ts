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
                url: '/reviews/postReview',
                method: 'POST',
                body,
            }),
        }),
        getReviews: build.query({
            query: ({id}) => `/reviews/${id}`,
        })
    }),
})

export const {useNewReviewMutation} = reviewsAPI