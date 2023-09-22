import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const { VERCEL_URL} = process.env

export const searchBarAPI = createApi({
    reducerPath: 'searchBarAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `$https://{VERCEL_URL}/api/products`,
    }),
    endpoints: (builder) => ({
        getResults : builder.query<any, {name : string}>({
            query: ({name}) => `?name=${name}`
        })
    })
})

export const {useGetResultsQuery} = searchBarAPI

