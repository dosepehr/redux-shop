import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchQuery: '',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        searchProduct(state, action) {
            state.searchQuery = action.payload.searchQuery;
        },
    },
});

export const { searchProduct } = productsSlice.actions;

export default productsSlice.reducer;
