import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <div className="logo">Tesfaye's Online Store Logo</div> */}
      <div className="logo"><strong>Tesfaye's Online Store Logo</strong></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {/* <li><Link to="/account">User Account</Link></li> */}
        {/* <li><Link to="/products/:productId">Product Details</Link></li> */}

      </ul>
    </nav>
  );
};

export default NavBar;