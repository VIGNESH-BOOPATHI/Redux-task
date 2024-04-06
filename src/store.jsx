// Import necessary functions from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import cart reducer

// Create Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Include cart reducer in store
  },
});

// Export the store
export default store;