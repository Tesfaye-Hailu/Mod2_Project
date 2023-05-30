// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './index.css';

// const ProductListing = () => {
//     // const { products } = useContext(PrimaryContext)
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     //  Define an async function to fetch products
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         //  Update the state with the fetched product data
//         setProducts(response.data);
//       } catch (error) {
//         // Log any errors that occur during the API request
//         console.error('Error fetching products:', error);
//       }
//     };

//     // Call the fetchProducts function when the component mounts
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Product Listing</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: {product.price}</p>
//             {/* <img src={product.image} alt={product.title} /> */}
//             <img src={product.image} alt={product.title} className="product-image" />
//             <Link to={`/products/${product.id}`}>View Details</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductListing;
// //////////////////////////////////


import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';
import "./index.css";

const ProductListing = () => {
  const products = useContext(PrimaryContext);

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