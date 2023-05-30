// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './index.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
// //   const { products } = useContext(PrimaryContext)
//   const [product, setProduct] = useState(null);



//   useEffect(() => {
//     // look at products and get the one with the right ID
//     // setProduct(theRightProducts)

//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//       {/* <img src={product.image} alt={product.title} /> */}
//       <img src={product.image} alt={product.title} className="product-image" />
//     </div>
//   );
// };

// export default ProductDetails;


// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { PrimaryContext } from '../../Components/PrimaryContext';
// import './index.css';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const products = useContext(PrimaryContext);
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//       <img src={product.image} alt={product.title} className="product-image" />
//     </div>
//   );
// };

// export default ProductDetails;


// ////////////

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';
import './index.css';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(PrimaryContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    

  <div className="product-details">
  <h1 className="product-details-title">Product Details</h1>
  {/* <h2>Product Name: {product.title}</h2> */}
  
  <h2>
  <span className="product-name">Product Name:</span>{" "}
  <span className="product-title">{product.title}.</span>
  </h2>
  
  <h3>
  <span className="product-description-label">Product Description:</span>{" "}
  <span className="product-description">{product.description}</span>.
  </h3>
  
  <h4>
  <span className="product-price-label">Price: </span>
  <span className="product-price-value">${product.price}</span>
  </h4>
  <div className="add-to-cart">
         
  <button >Add to Cart</button>     
      
   </div> 
  <img src={product.image} alt={product.title} className="product-image" />
</div>
  );
};

export default ProductDetails;

////////////////////////

