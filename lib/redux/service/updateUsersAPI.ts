import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface updateImage{
    userId:string,
    image:string
}
export const userUpdateApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/users"
    }),
    reducerPath:"userUpdateAPI",
    endpoints:(build)=>({
        updateImageUser:build.mutation<null, updateImage >({
            query:(body)=>({
                url:`/updateUser`,
                method:"PUT",
                body
            })
        })
    })
})

export const {useUpdateImageUserMutation}=userUpdateApi