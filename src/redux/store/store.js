import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/apiSlice';
import cartSlice, { getTotals, populateCart } from '../reducers/cartSlice';
import productsSlice from '../reducers/productsSlice';

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

store.dispatch(apiSlice.endpoints.getProducts.initiate());
store.dispatch(populateCart());
store.dispatch(getTotals());
export default store;
