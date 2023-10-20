import { createSlice } from "@reduxjs/toolkit";
import { type CartProduct } from "@/utils/types";

type CartItems = {
  cartItems: CartProduct[];
  cartItemsId: Record<string, number>;
};

const initialState: CartItems = {
  cartItems: [],
  cartItemsId: {},
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCart(state, { payload }) {
      const hasItem = state.cartItems.find((item) => item.id === payload.id);
      if (hasItem) {
        hasItem.quantity = (hasItem.quantity || 0) + 1;
      } else {
        payload = {
          ...payload,
          quantity: 1,
        };

        state.cartItems.push(payload);
      }
    },
    addTotalCart(state, { payload }) {
      state.cartItems = payload;
    },
  },
});

export const { addCart, addTotalCart } = cartItemsSlice.actions;
