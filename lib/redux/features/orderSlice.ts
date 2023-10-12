import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        currentFlag: false,
    },
    reducers: {
       setOrderFlag(state, {payload}) {
           state.currentFlag = payload;
       }
    },
})

export const {setOrderFlag} = orderSlice.actions