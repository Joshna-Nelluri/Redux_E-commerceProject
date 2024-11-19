
const initialState = {
    selectedProduct: [], 
  };


  const selectedProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_COMPANY':
        const company = action.payload;
  
        if (state.selectedProduct.includes(company)) {
          return {
            ...state,
            selectedProduct: state.selectedProduct.filter(item => item !== company), 
          };
        } 
        else {
          return {

            ...state,
            selectedProduct: [...state.selectedProduct, company], 
            
          };
        
        }
  
      default:
        return state;
    }
  };
  
  export default selectedProductsReducer;
  