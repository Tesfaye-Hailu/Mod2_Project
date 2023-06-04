
import React, { useContext } from 'react';   // to access values of context object
import { useParams, useNavigate } from 'react-router-dom';  //useParams hook allows to access dynamic parameters from URL
import { PrimaryContext } from '../PrimaryContext';
import './index.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, setCartItems } = useContext(PrimaryContext);
  const product = products.find((p) => p.id === parseInt(id)); //Finds a product from an array of products based on a matching id.
  const navigate = useNavigate();

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setCartItems((prevCart) => [...prevCart, product]);
    navigate('/cart', { state: { totalPrice: product.price } });
  };

return (
  <div className="product-details">
    <h1 className="product-details-title">Product Details</h1>
    <div className="product-info">
      <div className="product-info-item">
        <span className="product-info-label">Product Name:</span>{' '}
        <span className="product-info-value">{product.title}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Price:</span>{' '}
        <span className="product-info-value">${product.price}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Category:</span>{' '}
        <span className="product-info-value">{product.category}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Rating:</span>{' '}
        <span className="product-info-value">{product.rating.rate}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
    <br />
      <div className="product-description">
        <span className="product-info-label">Product Description:</span>
       
        <span className="product-info-value">{product.description}</span>
      </div>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
    </div>
  );
};

export default ProductDetails;
