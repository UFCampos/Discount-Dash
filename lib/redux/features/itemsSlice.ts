import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        products: [],
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
        },
        refreshProducts:(state, {payload})=>
        {
            const totalProducts = state.products.concat(payload)
            state.products = totalProducts
        }
    },
})

export const { loadProducts, loadErrors, isLoadingItems, refreshProducts} = itemsSlice.actions
