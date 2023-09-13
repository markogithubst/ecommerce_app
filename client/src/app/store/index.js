import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { clientsApiSlice } from '../api/clientsApiSlice';
import { categoriesApiSlice } from '../api/categoriesApiSlice';
import { productsApiSlice } from '../api/productsApiSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [clientsApiSlice.reducerPath]: clientsApiSlice.reducer,
    [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(clientsApiSlice.middleware)
      .concat(categoriesApiSlice.middleware)
      .concat(productsApiSlice.middleware)
});
