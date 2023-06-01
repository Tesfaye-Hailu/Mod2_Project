

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';

const NavBar = () => {
  const { cartItems } = useContext(PrimaryContext);

  return (
    <nav>
      <div className="logo"><strong>Tesfaye's Online Store Logo</strong></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;