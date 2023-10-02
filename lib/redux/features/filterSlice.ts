import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        name: "",
    },
    reducers: {
        setName: (state, { payload }) => {
            state.name = payload;
        },
    }
})

export const { setName } = filterSlice.actions