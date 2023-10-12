import {createSlice} from '@reduxjs/toolkit';

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		isOpen: false,
	},
	reducers: {
		toggleMenu(state) {
			state.isOpen = !state.isOpen;
		},
	},
});

export const {toggleMenu} = menuSlice.actions;
