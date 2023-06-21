import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingProduct >= 0) {
                state.cartItems[existingProduct] = {
                    ...state.cartItems[existingProduct],
                    cartQty: state.cartItems[existingProduct].cartQty + 1,
                };
                toast.info('تعداد افزایش یافت', { position: 'top-right' });
            } else {
                let tempProductItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty,
                };
                state.cartItems.push(tempProductItem);
                toast.success('محصول به سبد خرید اضافه شد', {
                    position: 'top-right',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
