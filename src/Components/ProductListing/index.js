import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';
import './index.css';

const ProductListing = () => {
  const { products } = useContext(PrimaryContext);

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h2>
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
