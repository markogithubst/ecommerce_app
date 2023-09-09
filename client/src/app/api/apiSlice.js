import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.SERVER_API_URL
  }),
  endpoints: (_builder) => ({
    // queries are defined here
  })
});
