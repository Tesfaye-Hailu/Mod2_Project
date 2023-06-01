
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PrimaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log('Added to cart:', product);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };

  const finalizePayment = () => {
    console.log('Payment finalized in cash');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const contextValue = {
    products,
    addToCart,
    cartItems,
    setCartItems,
    calculateTotalPrice,
    finalizePayment,
    clearCart,
  };

  return (
    <PrimaryContext.Provider value={contextValue}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContext, PrimaryProvider };