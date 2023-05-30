// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import ProductListing from './Components/ProductListing';
// import ProductDetails from './Components/ProductDetails';
// import NavBar from './Components/NavBar';

// const App = () => {
//   // const { setProducts } = useContext(PrimaryContext)
//   // do call here
//   // set products IN CONTEXT
//   // setProducts(res.data)

//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductListing />} />
//            {/* <Route exact path="/cart" component={Cart} /> */}
//           <Route path="/products/:productId" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimaryProvider } from './Components/PrimaryContext';
import Home from './Components/Home';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';

const App = () => {

return (
  <PrimaryProvider>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" component={Cart} /> 
    </Routes>
  </Router>
</PrimaryProvider>
);
};

export default App;

