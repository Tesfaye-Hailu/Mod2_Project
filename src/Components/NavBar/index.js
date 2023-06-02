
//import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { PrimaryContext } from '../../Components/PrimaryContext';
import logo from 'file:///C:/Users/thailu/Documents/mod2project/Logo.jpg';
import './index.css';

const NavBar = () => {
  //const { cartItems } = useContext(PrimaryContext);

  return (
    <nav>
  <div className="logo-container">
    <img src={logo} alt="Logo" className="logo" /> 
    <div className="store-name">
      <h1>Tesfaye's Online Store</h1>
    </div>
  </div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/products">Products</Link></li>
    <li><Link to="/cart">Cart</Link></li>
  </ul>
</nav>
  );
};

export default NavBar;