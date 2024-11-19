import { createStore, combineReducers } from 'redux';
import cartReducer  from './cartReducer';
import selectedProductsReducer from './selectedProductsReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    selectedProduct: selectedProductsReducer,
});

const store = createStore(rootReducer);

export default store;



// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice'; // Import the cartSlice reducer
// import selectedProductsReducer from './selectedProductsSlice';
// const store = configureStore({
//   reducer: {
//     cart: cartReducer, // Using the cartSlice reducer here
// selectedProduct: selectedProductsReducer,
//   },
// });

// export default store;
