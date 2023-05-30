import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PrimaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    // You can display a loading spinner or a message here
    return <div>Loading...</div>;
  }

  return (
    <PrimaryContext.Provider value={products}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContext, PrimaryProvider };
