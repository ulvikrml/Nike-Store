import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cartItems: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        addToCart: (state, action) => {
            const temp = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(temp);
        }
    }
})

export const { toggleCart, addToCart } = cart.actions
export default cart.reducer;