
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();


  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncreaseQuantity = (itemId, quantity) => {
    if (quantity < 10) {
      dispatch(updateQuantity(itemId, quantity + 1)); 
    }
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity(itemId, quantity - 1)); 
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId)); 
  };

  return (
    <div className="cartItems">
      <h2 className="cart-text">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-emptyText">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="item-img"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <p><strong>{item.company}</strong></p>
              <p>{item.name}</p>
              <p><strong>Price per item:</strong> ${item.price}</p>
              <p><strong>Total Price:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>

              <div className="cart-update">
                <button
                  className="incBtn"
                  onClick={() => handleIncreaseQuantity(item.id, item.quantity)} 
                  disabled={item.quantity >= 10}
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  className="decBtn"
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)} 
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <button className="removeBtn" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;




















// const CartPage = () => {
//     const cartItems = useSelector((state) => state.cart.cartItems);
//     const dispatch = useDispatch();

//     const handleRemoveItem = (item) => {
//         dispatch(removeFromCart(item));  
//     };

//     return (
//         <div className='cartPage'>
//             <h2 className='y-cart'>Your Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p className='empty'>Your cart is empty</p>
//             ) : (
//                 <div className='cartItems'>
//                     {cartItems.map((item) => (
//                         <div key={item.id} className='cart-section'>
//                             <div className='cart-img'>
//                                 <img src={item.image} alt={item.model} />
//                             </div>

//                             <div className='cart-details'>
//                                 <h3>{item.product}</h3>
//                                 <h3>{item.model}</h3>
//                                 <p>{item.price}</p>
//                             </div>
//                             <button onClick={() => handleRemoveItem(item)} className='removeBtn'>Remove</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;
