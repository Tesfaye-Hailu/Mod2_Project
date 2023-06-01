
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';

const Cart = () => {
  const { cartItems, clearCart } = useContext(PrimaryContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleFinalizePayment = () => {
    // Handle finalize payment logic here
    alert("Thank you for shopping with us!");
    clearCart(); // Clear the cart
  };

  return (
    <div>
      <h1>Cart</h1>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <button onClick={handleFinalizePayment}>Finalize Payment in Cash</button>
    </div>
  );
};

export default Cart;