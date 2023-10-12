import {createSlice} from '@reduxjs/toolkit';

type ProductCartState = {
	productCart: any[]; // Cambiar el any
	quantityCartID: Record<string, number>;
};

export const addProductCartSlice = createSlice({
	name: 'addProductCart',
	initialState: {
		productCart: [],
		quantityCartID: {},
	} as ProductCartState,
	reducers: {
		addCartProduct(state, {payload}) {
			state.productCart = payload;
		},
		addToCart(state, {payload}) {
			const {productId, quantity} = payload;
			if (state.quantityCartID[productId]) {
				state.quantityCartID[productId] += quantity;
			} else {
				state.quantityCartID[productId] = quantity;
			}
		},
		removeFromCart(state, {payload}) {
			const {productId, quantity} = payload;
			if (state.quantityCartID[productId]) {
				if (state.quantityCartID[productId] <= 1) {
					delete state.quantityCartID[productId];
				} else {
					state.quantityCartID[productId] -= quantity;
				}
			}
		},
	},
});

export const {addCartProduct, addToCart, removeFromCart}
  = addProductCartSlice.actions;
