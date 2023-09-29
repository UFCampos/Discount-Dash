import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itemsSlice } from "../redux/features/itemsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuSlice } from "./features/menuSlice";
import { searchProfileAPI } from "./service/searchProfileAPI";
import { userProfileSlice } from "./features/userProfile";
import { cartProductsAPI } from "./service/cartProductsAPI";
import { addProductCartSlice } from "./features/addProductCartSlice";
import { productsApi } from './service/productsAPI'
import { searchProfileAPI } from './service/searchProfileAPI'
import {userApi} from './service/usersRegisterAPI'

export const store = configureStore({
    reducer: {
        items : itemsSlice.reducer,
        menu : menuSlice.reducer,
        userProfile: userProfileSlice.reducer,
        addProductCart: addProductCartSlice.reducer,
        [productsApi.reducerPath] : productsApi.reducer,
        [searchProfileAPI.reducerPath] : searchProfileAPI.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [cartProductsAPI.reducerPath]: cartProductsAPI.reducer,
        [searchProfileAPI.reducerPath]: searchProfileAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productsApi.middleware, userApi.middleware, cartProductsAPI.middleware,),
})

setupListeners(store.dispatch);