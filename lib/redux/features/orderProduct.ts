import Order from '@/components/Orders/Orders';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	value: 'preparation',
};

export const OrderProduct = createSlice({
	name: 'order',
	initialState,
	reducers: {
		change(state) {
			if (state.value === 'preparation') {
				state.value = 'On the way';
			} else {
				state.value = 'Delivered';
			}
		},
	},
});

export const {change} = OrderProduct.actions;

export default OrderProduct.reducer;
