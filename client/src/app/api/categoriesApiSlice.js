import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApiSlice = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_API_URL,
    credentials: 'include'
  }),
  tagTypes: ['categoriesList'],
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: () => ({
        url: '/category',
        method: 'GET'
      }),
      invalidatesTags: ['categoriesList']
    })
  })
});

export const {
  useGetCategoriesListQuery
} = categoriesApiSlice;
