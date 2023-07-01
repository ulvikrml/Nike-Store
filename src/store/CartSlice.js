import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    isCartOpen: false,
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    cartTotalAmount: 0,
    cartTotalQantity: 0,
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        addToCart: (state, action) => {
            const index = state.cartItems.findIndex((i) => i.id === action.payload.id)
            if (index >= 0) {
                state.cartItems[index].itemQuantity += 1;
            }
            else {
                const cartItem = { ...action.payload, itemQuantity: 1 };
                state.cartItems.push(cartItem);
            }
            toast.success(`${action.payload.title} added to Cart`);

        },
        removeFromCart: (state, action) => {
            const editedCart = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems = editedCart;
            toast.success(`${action.payload.title} Removed From Cart`);
        },

        increaseItemQTY: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload);
            if (index >= 0) {
                state.cartItems[index].itemQuantity += 1;
                toast.success(`Item QTY Increased`);
            }
        },

        decreaseItemQTY: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload);

            if (state.cartItems[index].itemQuantity > 1) {
                state.cartItems[index].itemQuantity -= 1;
                toast.success(`Item QTY Decreased`);
            }
            else {
                const editedCart = state.cartItems.filter(item => item.id !== action.payload)
                state.cartItems = editedCart;
            }
        },
        clearAllItems: (state) => {
            state.cartItems = []
            toast.success(`Cart Cleared`);
        },
        calculateTotal: (state) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, itemQuantity } = cartItem;
                const totalPrice = price * itemQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += itemQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQantity = totalQTY;
        }
    }
})

export const { toggleCart, addToCart, removeFromCart, increaseItemQTY, decreaseItemQTY, clearAllItems, calculateTotal } = cart.actions
export default cart.reducer;