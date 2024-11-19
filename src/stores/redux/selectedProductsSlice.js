// selectedProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: [],
};

const selectedProductsSlice = createSlice({
  name: 'selectedProducts', // Name of the slice, used as a prefix for action types
  initialState,
  reducers: {
    // Toggle company in selectedProducts array
    toggleCompany: (state, action) => {
      const company = action.payload;
  
      if (state.selectedProduct.includes(company)) {
        state.selectedProduct = state.selectedProduct.filter(item => item !== company);
      } else {
        state.selectedProduct.push(company);
      }
    },
  },
});

// Export the action creator and reducer
export const { toggleCompany } = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
