import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface updateImage{
    id:string,
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
                url:`/updateUser?id=${body.id}&image=${body.image}`,
                method:"PUT",
                body
            })
        })
    })
})

export const {useUpdateImageUserMutation}=userUpdateApi