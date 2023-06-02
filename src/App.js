                                         
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimaryProvider } from './Components/PrimaryContext';
import Home from './Components/Home';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
const App = () => {                                                                              

return (                                  
  <PrimaryProvider>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      {/* <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" component={Cart} />  */}
      <Route path="/products/:id" element={<ProductDetails />} /> {/* Include the :id parameter */}
      <Route path="/cart" element={<Cart />} /> {/* Use the 'element' prop for rendering components */}
                                                               
    </Routes>
    <Footer />
  </Router>
</PrimaryProvider>
);
};

export default App;

