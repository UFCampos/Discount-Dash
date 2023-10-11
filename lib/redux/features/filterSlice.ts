import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		name: '',
		categories: [],
	},
	reducers: {
		setName(state, {payload}) {
			state.name = payload;
		},
		setCategories(state, {payload}) {
			state.categories = payload;
		},
	},
});

export const {setName, setCategories} = filterSlice.actions;
