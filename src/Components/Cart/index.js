
import React, { useContext } from 'react';
import { PrimaryContext } from '../PrimaryContext';
import './index.css';

const Cart = () => {
  const { cartItems, clearCart } = useContext(PrimaryContext);

  //To calculate the total price of all items in the cartItems array. 
  //It uses the reduce method to iterate over each item in the array.
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


  const handleFinalizePayment = () => {
    const currentDate = new Date();
    const alertMessage = `Thank you for shopping with us!\n\nCurrent date and time: ${currentDate}`;
  
    alert(alertMessage);
  
    clearCart(); // Clear the cart
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      {cartItems.map((item) => (
        <div key={item.id}  className="item-price">
          <h3>{item.title}</h3>
          <h5>${item.price}</h5>
        </div>
      ))}
      <button onClick={handleFinalizePayment}>Finalize Payment!</button>
    </div>
  );
};

export default Cart;