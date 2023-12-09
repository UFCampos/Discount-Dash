import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const createProductsAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/products',
	}),
	reducerPath: 'createProductsAPI',
	tagTypes: ['Post'],
	endpoints: build => ({
		newPost: build.mutation({
			query: body => ({
				url: '/postProduct',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const {useNewPostMutation} = createProductsAPI;
