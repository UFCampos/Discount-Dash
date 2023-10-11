import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const searchProfileAPI = createApi({
	reducerPath: 'searchProfileAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: builder => ({
		getProfile: builder.query<any, {id: string}>({
			query: ({id}) => `/users/${id}`,
		}),
		postProfile: builder.mutation({
			query: body => ({
				url: '/users/register',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const {useGetProfileQuery, usePostProfileMutation} = searchProfileAPI;
