import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../hooks";
import { CartProduct } from "@/utils/types";

type CartItems = {
    cartItems: CartProduct[]
    cartItemsId: { [productId: string]: number }
}

const initialState: CartItems = {
    cartItems: [],
    cartItemsId: {},
}

export const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            let hasItem = state.cartItems.find((item) => item.id === payload.id);
            if (hasItem) {
                hasItem.quantity = (hasItem.quantity || 0) + 1;
            } else {
                state.cartItems.push(payload);
            }
        },
        addTotalCart: (state, { payload }) => {
            state.cartItems = payload
        }
    },
})

export const { addCart, addTotalCart } = cartItemsSlice.actions;