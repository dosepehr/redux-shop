import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchQuery: '',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,

});

export const {  } = productsSlice.actions;

export default productsSlice.reducer;
