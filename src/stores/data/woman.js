export const womanData = [{
    "id": "49",
    "product": "Woman Wear",
    "image": "/assets/Woman/1.jpg",
    "type": "Dress",
    "brand": "Zara",
    "model": "Flowy Maxi",
    "price": "79.99",
    "category": "Clothing",
    "description": "A flowy maxi dress with floral patterns, perfect for summer occasions."
},
{
    "id": "50",
    "product": "Woman Wear",
    "image": "/assets/Woman/2.jpg",
    "type": "Blouse",
    "brand": "H&M",
    "model": "Classic Silk",
    "price": "49.90",
    "category": "Clothing",
    "description": "A classic silk blouse suitable for professional and casual settings."
},
{
    "id": "51",
    "product": "Woman Wear",
    "image": "/assets/Woman/3.jpg",
    "type": "Jeans",
    "brand": "Levi's",
    "model": "501 Skinny",
    "price": "89.50",
    "category": "Clothing",
    "description": "Skinny fit jeans with a classic 5-pocket design, perfect for everyday wear."
},
{
    "id": "52",
    "product": "Woman Wear",
    "image": "/assets/Woman/4.jpg",
    "type": "Jumpsuit",
    "brand": "Forever 21",
    "model": "Utility Jumpsuit",
    "price": "59.99",
    "category": "Clothing",
    "description": "A utility-style jumpsuit with a modern and versatile look."
},
{
    "id": "53",
    "product": "Woman Wear",
    "image": "/assets/Woman/5.jpg",
    "type": "Skirt",
    "brand": "Topshop",
    "model": "A-Line Mini",
    "price": "39.99",
    "category": "Clothing",
    "description": "A stylish A-line mini skirt with a retro touch, suitable for various occasions."
},
{
    "id": "54",
    "product": "Woman Wear",
    "image": "/assets/Woman/6.jpg",
    "type": "Sweater",
    "brand": "Gap",
    "model": "Cable Knit",
    "price": "49.95",
    "category": "Clothing",
    "description": "A cozy cable knit sweater with a timeless design, perfect for chilly days."
},
{
    "id": "55",
    "product": "Woman Wear",
    "image": "/assets/Woman/7.jpg",
    "type": "Blazer",
    "brand": "Mango",
    "model": "Tailored Blazer",
    "price": "79.99",
    "category": "Clothing",
    "description": "A tailored blazer with a chic silhouette, suitable for formal and casual looks."
},
{
    "id": "56",
    "product": "Woman Wear",
    "image": "/assets/Woman/8.jpg",
    "type": "Activewear",
    "brand": "Lululemon",
    "model": "Align Leggings",
    "price": "98.00",
    "category": "Clothing",
    "description": "High-quality leggings with a buttery soft feel, ideal for yoga and workouts."
},
{
    "id": "57",
    "product": "Woman Wear",
    "image": "/assets/Woman/8.jpg",
    "type": "Swimwear",
    "brand": "Secret",
    "model": "Bikini Set",
    "price": "59.50",
    "category": "Clothing",
    "description": "A stylish bikini set with vibrant patterns, perfect for beach days."
},
{
    "id": "58",
    "product": "Woman Wear",
    "image": "/assets/Woman/10.jpg",
    "type": "Pants",
    "brand": "Hollister",
    "model": "High-Rise Skinny",
    "price": "49.95",
    "category": "Clothing",
    "description": "High-rise skinny pants with a flattering fit, suitable for various occasions."
},
{
    "id": "59",
    "product": "Woman Wear",
    "image": "/assets/Woman/11.jpg",
    "type": "Coat",
    "brand": "Voltaire",
    "model": "Wool Blend Coat",
    "price": "299.00",
    "category": "Clothing",
    "description": "A stylish wool blend coat with a modern and elegant design, perfect for colder days."
},
{
    "id": "60",
    "product": "Woman Wear",
    "image": "/assets/Woman/12.jpg",
    "type": "T-Shirt",
    "brand": "Eagle",
    "model": "Graphic Tee",
    "price": "24.95",
    "category": "Clothing",
    "description": "A casual graphic tee with trendy prints, suitable for relaxed everyday outfits."
}
]







// import React from 'react';
// import { useCart } from './context/CartContext';

// const UserCart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
  
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   // if (!isOpen) return null;

//   return (
//     <div className="cart-modal">
//       <div className="modal-content">
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             {cartItems.map((item) => (
//               <div key={item.id} className='item'>
//                 <img src={item.image} alt={item.name} className='item-img' style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//                 <p><strong>{item.company}</strong></p>
//                 <p>{item.name}</p>
//                 <p><strong>Price per item:</strong> ${item.price.toFixed(2)}</p>
//                 <p><strong>Total Price:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
//                 <p><strong>Quantity:</strong> {item.quantity}</p>
//                 <button onClick={() => updateQuantity(item, item.quantity + 1)} disabled={item.quantity >= 10}>+</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//                 <button onClick={() => removeFromCart(item)}>Remove</button>
//               </div>
//             ))}
//             <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
//           </>
//         )}
//         {/* <button onClick={onClose}>Close</button> */}
//       </div>
//     </div>
//   );
// };

// export default UserCart;



//cartContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create the Cart Context
// const CartContext = createContext();

// // Create a provider for the CartContext
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     // Get saved cart from localStorage if available
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     // Save cartItems to localStorage whenever it changes
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add items to the cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex((i) => i.id === item.id);
//       if (itemIndex > -1) {
//         const updatedItems = [...prevItems];
//         updatedItems[itemIndex].quantity += 1;
//         return updatedItems;
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   // Function to remove item from the cart
//   const removeFromCart = (item) => {
//     setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
//   };

//   // Function to update the quantity of an item
//   const updateQuantity = (item, quantity) => {
//     setCartItems((prevItems) => {
//       const updatedItems = prevItems.map((i) =>
//         i.id === item.id ? { ...i, quantity } : i
//       );
//       return updatedItems;
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };



//toggleReducer.js

// const initialState = {
//     selectedProduct: [],
//   };
  
//   const productReducer = (state = initialState, action) => {
//       console.log('Current state:', state);  // Log the current state
//     console.log('Dispatching action:', action); 
//     switch (action.type) {
//       case 'TOGGLE_PRODUCT':
//         const { brand } = action.payload;
//         const isSelected = state.selectedProduct.includes(brand);
  
//         return {
//           ...state,
//           selectedProduct: isSelected
//             ? state.selectedProduct.filter(item => item !== brand)
//             : [...state.selectedProduct, brand],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default productReducer;
  
// export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

// export const toggleProduct = (brand) => {
//   console.log('Dispatching toggleProduct with brand:', brand);  // Log to check the action
//   return {
//     type: TOGGLE_PRODUCT,
//     payload: { brand },
//   };
// };
