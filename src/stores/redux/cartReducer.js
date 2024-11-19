
const initialState = {
  cartItems: [],  
  isCartOpen: false,
  // isModalOpen: false,  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'TOGGLE_CART_POPUP':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,  
      };
      
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItem >= 0) {
        
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

   
    default:
      return state;
  }
};

export default cartReducer;








 // case 'TOGGLE_CART_MODAL':
    //   return {
    //     ...state,
    //     isModalOpen: !state.isModalOpen,
    //   };


// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return { ...state, cartItems: [...state.cartItems, action.payload] };


// export default cartReducer;  
