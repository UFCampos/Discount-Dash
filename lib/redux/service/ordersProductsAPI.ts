import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const orderProductAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	reducerPath: 'orderProductAPI',
	tagTypes: ['GetOrders'],
	endpoints: build => ({
		getOrders: build.query({
			query: ({id}) => `/shopOrder?userId=${id}`,
		}),
		getShopOrder: build.query({
			query: ({id}) => `/shopOrder?shopId=${id}`,
		}),
		updateOrder: build.mutation({
			query: body => ({
				url: `/shopOrder/update`,
				method: 'PUT',
				body,
			}),
		}),
	}),
});

export const {useGetOrdersQuery, useUpdateOrderMutation, useGetShopOrderQuery} = orderProductAPI;
