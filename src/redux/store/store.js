import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/apiSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

store.dispatch(apiSlice.endpoints.getProducts.initiate());

export default store;
