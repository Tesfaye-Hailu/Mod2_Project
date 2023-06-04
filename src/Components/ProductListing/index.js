import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryContext } from '../PrimaryContext';
import './index.css';

const ProductListing = () => {
  const { products, filteredProducts, setFilteredProducts } = useContext(PrimaryContext);

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );//To filter products array on the specified category & set the result to filtered products state variable

      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <div className="product-buttons">
        <button onClick={() => handleCategoryClick('all')}>All Products</button>
        <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
        <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button>
        <button onClick={() => handleCategoryClick('jewelery')}>Jewelries</button>
        <button onClick={() => handleCategoryClick('electronics')}>Electronics</button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h3>
              <Link to={`/products/${product.id}`}>
                {product.title}
              </Link>
            </h3>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="product_image" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;