import { createSlice } from "@reduxjs/toolkit";

export const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addCart: (state, { payload }) => {console.log(payload);
        {
            state.cartItems = payload;
        }},
    },
})

export const { addCart } = cartItemsSlice.actions;