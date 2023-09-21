const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react')

const newUserAPI = createApi({
    reducerPath: 'newUserAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/users'
    }),
    endpoints: (builder) => ({
        postNewUser: builder.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body
            })
        })
    })
})
