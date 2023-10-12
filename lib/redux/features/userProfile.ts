import {createSlice} from '@reduxjs/toolkit';

export const userProfileSlice = createSlice({
	name: 'userProfile',
	initialState: {
		id: '',
		photoUrl: '',
		name: '',
		email: '',
		role: 'user'
	},
	reducers: {
		setUser(state, {payload}) {
			state.id = payload.id,
			state.photoUrl = payload.photoUrl,
			state.name = payload.name,
			state.email = payload.email,
			state.role = payload.role || 'user';
		},
		setRole(state, {payload}) {
			state.role = payload;
		}
	},
});

export const {setUser, setRole} = userProfileSlice.actions;
