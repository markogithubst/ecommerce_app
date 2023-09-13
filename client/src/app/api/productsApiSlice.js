import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_API_URL,
    credentials: 'include'
  }),
  tagTypes: ['productsList'],
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => ({
        url: '/product?size=10000&include=Category',
        method: 'GET'
      }),
      invalidatesTags: ['productsList']
    })
  })
});

export const {
  useGetProductsListQuery
} = productsApiSlice;
