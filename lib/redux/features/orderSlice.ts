import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        currentState: '',
    },
    reducers: {
       changeState(state, {payload}) {
           state.currentState = payload;
       }
    },
})

export const {changeState} = orderSlice.actions