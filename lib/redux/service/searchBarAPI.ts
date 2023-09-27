import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

<<<<<<< HEAD

=======
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca
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

