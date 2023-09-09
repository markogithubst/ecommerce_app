import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientsApiSlice = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_API_URL
  }),
  tagTypes: ['clientsList', 'client'],
  endpoints: (builder) => ({
    // this method gets all the clients
    getClientsList: builder.query({
      query: () => '/clients',
      providesTags: ['clientsList']
    }),
    invalidatesTags: ['client'],
    // this method creates a new client
    createClient: builder.mutation({
      query: (body) => ({
        url: '/clients',
        method: 'POST',
        body
      }),
      invalidatesTags: ['clientsList']
    }),
    // this method gets a client by the id
    getClient: builder.query({
      query: (id) => `/clients/${id}`,
      providesTags: ['client']
    }),
    // this method updates a client by the id
    updateClient: builder.mutation({
      query: ({ id, body }) => ({
        url: `/clients/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['clientsList', 'client']
    }),
    // this method deletes a client by the id
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['clientsList']
    })
  })
});

export const {
  useGetClientsListQuery,
  useCreateClientMutation,
  useGetClientQuery,
  useUpdateClientMutation,
  useDeleteClientMutation
} = clientsApiSlice;
