import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itemsSlice } from "../redux/features/itemsSlice";
import { searchBarAPI } from "../redux/service/searchBarAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuSlice } from "./features/menuSlice";
import { createProductsAPI } from "./service/createProductsAPI";
import { searchProfileAPI } from "./service/searchProfileAPI";
import { userProfileSlice } from "./features/userProfile";
import { cartProductsAPI } from "./service/cartProductsAPI";
import { addProductCartSlice } from "./features/addProductCartSlice";

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    menu: menuSlice.reducer,
    userProfile: userProfileSlice.reducer,
    addProductCart: addProductCartSlice.reducer,
    [searchBarAPI.reducerPath]: searchBarAPI.reducer,
    [createProductsAPI.reducerPath]: createProductsAPI.reducer,
    [cartProductsAPI.reducerPath]: cartProductsAPI.reducer,
    [searchProfileAPI.reducerPath]: searchProfileAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartProductsAPI.middleware,
      searchBarAPI.middleware,
      createProductsAPI.middleware
    ),
});

setupListeners(store.dispatch);