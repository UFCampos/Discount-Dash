import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        products: [],
        newProduct:false,
        errorsItems: false,
        isLoadItems: false,
    },
    reducers: {
        loadProducts: (state, {payload}) =>
         {
            state.products = payload
        },
        loadErrors: (state, {payload}) =>
        {
            state.errorsItems = payload
        },
        isLoadingItems: (state, {payload}) =>
        {
            state.isLoadItems = payload
        }
    },
})

export const { loadProducts, loadErrors, isLoadingItems} = itemsSlice.actions
