

import React, { useContext } from 'react';
import { PrimaryContext } from '../PrimaryContext';

const ProductCategory = () => {
  const { products, filteredProducts, setFilteredProducts } = useContext(PrimaryContext);


  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <button onClick={() => handleCategoryClick('all')}>All Products</button>
      <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
      <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button>
      <button onClick={() => handleCategoryClick('jewelery')}>Jewelery</button>
      <button onClick={() => handleCategoryClick('electronics')}>Electronics</button>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
