import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const { NEXT_PUBLIC_BASE_URL } = process.env

export const searchProfileAPI = createApi({
    reducerPath: "searchProfileAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${NEXT_PUBLIC_BASE_URL}`
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<any, {id : Number}>({
            query: ({id}) => `/api/users/${id}`
        })
    })
})

export const { useGetProfileQuery } = searchProfileAPI