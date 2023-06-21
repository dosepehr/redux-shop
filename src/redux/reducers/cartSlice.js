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
                    cartQty:
                        state.cartItems[existingProduct].cartQty +
                        action.payload.cartQty,
                };
                toast.info('تعداد افزایش یافت', { position: 'bottom-right' });
            } else {
                let tempProductItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty,
                };
                state.cartItems.push(tempProductItem);
                toast.success('محصول به سبد خرید اضافه شد', {
                    position: 'bottom-right',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        getTotals(state, action) {
            let { total, qty } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQty } = cartItem;
                    const itemTotal = price * cartQty;

                    cartTotal.total += itemTotal;
                    cartTotal.qty += cartQty;

                    return cartTotal;
                },
                {
                    total: 0,
                    qty: 0,
                }
            );
            total = parseFloat(total.toFixed());
            state.cartTotalQty = qty;
            state.cartTotalAmount = total;
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            toast.error('محصول از سبد خرید حذف شد', {
                position: 'bottom-right',
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart, getTotals, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
