import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/apiSlice';
import cartSlice from '../reducers/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

store.dispatch(apiSlice.endpoints.getProducts.initiate());

export default store;
