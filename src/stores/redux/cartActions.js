
export const toggleCompany = (company) => ({
  type: 'TOGGLE_COMPANY',
  payload: company,
});


export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });
  
export const updateQuantity = (itemId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { itemId, quantity },
});




export const toggleCartPopup = () => ({
  type: 'TOGGLE_CART_POPUP'
});



// export const toggleCartModal = () => ({
//   type: 'TOGGLE_CART_MODAL'
// });