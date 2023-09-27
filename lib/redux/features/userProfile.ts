import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
        id: undefined,
        photoUrl: undefined,
        name: undefined,
        email: undefined, 
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.id = payload.id,
            state.photoUrl = payload.photoUrl,
            state.name = payload.name,
            state.email = payload.email
        },
    },
})

export const { setUser } = userProfileSlice.actions
