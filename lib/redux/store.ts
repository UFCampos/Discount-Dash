import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {itemsSlice} from '../redux/features/itemsSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {menuSlice} from './features/menuSlice';
import {searchProfileAPI} from './service/searchProfileAPI';
import {userProfileSlice} from './features/userProfile';
import {cartProductsAPI} from './service/cartProductsAPI';
import {addProductCartSlice} from './features/addProductCartSlice';
import {productsApi} from './service/productsAPI';
import { userUpdateApi } from './service/updateUsersAPI';
import {categoriesAPI} from './service/categoriesAPI';
import {filters} from './service/filtersAPI';
import {filterSlice} from './features/filterSlice';
import {paymentSlice} from './features/paymentSlice';
import {cartItemsSlice} from './features/cartItemsSlice';
import {createProductsAPI} from './service/createProductsAPI';
import {orderProductAPI} from './service/ordersProductsAPI';
import { orderSlice } from './features/orderSlice';
import { userApi } from './service/usersRegisterAPI';
import { reviewsAPI } from './service/reviewsAPI';
import { addressesAPI } from './service/addressesAPI';
import { favoritesAPI } from './service/favoritesAPI';
import { favoriteSlice } from './features/FavoriteSlice';
import { historyApi } from './service/historyApi';
import { changeNameAPI } from './service/changeNameAPI';
import { myProductsStoreAPI } from './service/myProductsStoreAPI';

export const store = configureStore({
	reducer: {
		items: itemsSlice.reducer,
		menu: menuSlice.reducer,
		userProfile: userProfileSlice.reducer,
		addProductCart: addProductCartSlice.reducer,
		filter: filterSlice.reducer,
		payments: paymentSlice.reducer,
		cartItems: cartItemsSlice.reducer,
		favorites: favoriteSlice.reducer,
		order: orderSlice.reducer,
		[historyApi.reducerPath]: historyApi.reducer,
		[addressesAPI.reducerPath]: addressesAPI.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[searchProfileAPI.reducerPath]: searchProfileAPI.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[cartProductsAPI.reducerPath]: cartProductsAPI.reducer,
		[filters.reducerPath]: filters.reducer,
		[categoriesAPI.reducerPath]: categoriesAPI.reducer,
		[createProductsAPI.reducerPath]: createProductsAPI.reducer,
		[orderProductAPI.reducerPath]: orderProductAPI.reducer,
		[reviewsAPI.reducerPath]: reviewsAPI.reducer,
		[favoritesAPI.reducerPath]: favoritesAPI.reducer,
		[userUpdateApi.reducerPath]:userUpdateApi.reducer,
		[changeNameAPI.reducerPath]: changeNameAPI.reducer,
		[myProductsStoreAPI.reducerPath]: myProductsStoreAPI.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			searchProfileAPI.middleware,
			productsApi.middleware,
			filters.middleware,
			userApi.middleware,
			cartProductsAPI.middleware,
			categoriesAPI.middleware,
			createProductsAPI.middleware,
			orderProductAPI.middleware,
			addressesAPI.middleware,
			userApi.middleware,
			reviewsAPI.middleware,
			favoritesAPI.middleware,
			userUpdateApi.middleware,
			historyApi.middleware,
			changeNameAPI.middleware,
			myProductsStoreAPI.middleware
		),
});


setupListeners(store.dispatch);
