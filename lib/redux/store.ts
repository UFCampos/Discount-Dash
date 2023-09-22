import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itemsSlice } from "../redux/features/itemsSlice";
import {searchBarAPI} from "../redux/service/searchBarAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuSlice } from "./features/menuSlice";

export const store = configureStore({
    reducer: {
        items : itemsSlice.reducer, 
        menu : menuSlice.reducer,
        [searchBarAPI.reducerPath] : searchBarAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchBarAPI.middleware)
})

setupListeners(store.dispatch)