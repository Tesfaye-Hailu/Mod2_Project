
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//to create a new context using the createContext function from react
const PrimaryContext = createContext();

//Primaryprovidor receives children as a prop, which represents the nested components wrapped by this provider.

const PrimaryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);   // products is an array that holds lists of products.
  const [isLoading, setIsLoading] = useState(true); // isLoading is a boolean variable that indicates whether the data is being currently loaded or not.
  const [cartItems, setCartItems] = useState([]); // an array that represents the items in the user's shopping cart.
  const [filteredProducts, setFilteredProducts] = useState([]); // Add filteredProducts state and setter

  useEffect(() => {
    const fetchProducts = async () => {
      try {                                       //Try … catch statement is used for error handling in JS
        const response = await axios.get('https://fakestoreapi.com/products'); //use axios to make an HTTP GET request to the specified API
        setProducts(response.data);
        setIsLoading(false);  // to indicate data loading is completed.
      } catch (error) {       // if an error occurs during API request, the catch block logs the error into the console.
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

    const addToCart = (product) => {
    
    setCartItems([...cartItems, product]);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };

  const finalizePayment = () => {
    
  };

  const clearCart = () => {
    console.log('Clearing cart');
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
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <PrimaryContext.Provider value={contextValue}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContext, PrimaryProvider };

 //Primarycontext defines the context and what it contains. 
//Primaryprovidor is a component that provides the context values to the consuming components.
