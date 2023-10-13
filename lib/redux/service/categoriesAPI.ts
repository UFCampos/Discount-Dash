import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type Category = {
	id: string;
	category: string;
};

export const categoriesAPI = createApi({
	reducerPath: 'categoriesAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: build => ({
		getCategories: build.query<Category[], null>({
			query: () => 'categories',
		}),
	}),
});

export const {useGetCategoriesQuery} = categoriesAPI;
