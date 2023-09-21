import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        products: [],
    },
    reducers: {
        loadProducts: (state, {payload}) =>
         {
            state.products = payload
        },
    },
})

export const { loadProducts } = itemsSlice.actions
