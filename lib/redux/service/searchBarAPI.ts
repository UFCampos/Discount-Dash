import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const searchBarAPI = createApi({
    reducerPath: 'searchBarAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `/api/products`,
    }),
    endpoints: (builder) => ({
        getResults : builder.query<any, {name : string}>({
            query: ({name}) => `?name=${name}`
        })
    })
})

export const {useGetResultsQuery} = searchBarAPI

