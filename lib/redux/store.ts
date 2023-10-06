import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itemsSlice } from "../redux/features/itemsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuSlice } from "./features/menuSlice";
import { searchProfileAPI } from "./service/searchProfileAPI";
import { userProfileSlice } from "./features/userProfile";
import { cartProductsAPI } from "./service/cartProductsAPI";
import { addProductCartSlice } from "./features/addProductCartSlice";
import { productsApi } from "./service/productsAPI";
import { categoriesAPI } from "./service/categoriesAPI";
import { userApi } from "./service/usersRegisterAPI";
import { filters } from "./service/filtersAPI";
import { filterSlice } from "./features/filterSlice";
import { OrderProduct } from "./features/orderProduct";
import { paymentSlice } from "./features/paymentSlice";

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    menu: menuSlice.reducer,
    userProfile: userProfileSlice.reducer,
    addProductCart: addProductCartSlice.reducer,
    filter: filterSlice.reducer,
    OrderProduct:OrderProduct.reducer,
    payments:paymentSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [searchProfileAPI.reducerPath]: searchProfileAPI.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartProductsAPI.reducerPath]: cartProductsAPI.reducer,
    [filters.reducerPath]: filters.reducer,
    [categoriesAPI.reducerPath]:categoriesAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      filters.middleware,
      userApi.middleware,
      cartProductsAPI.middleware,
      categoriesAPI.middleware
    ),
});

setupListeners(store.dispatch);
