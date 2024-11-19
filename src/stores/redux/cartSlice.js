// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',  // Name of the slice, used as a prefix for action types
  initialState,
  reducers: {
    // Toggle cart popup (cart modal visibility)
    toggleCartPopup: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    // Add product to cart
    addToCart: (state, action) => {
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItem >= 0) {
        state.cartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    // Update product quantity in cart
    updateQuantity: (state, action) => {
      state.cartItems = state.cartItems.map(item =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    },
  },
});

// Export actions (action creators)
export const { toggleCartPopup, addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
