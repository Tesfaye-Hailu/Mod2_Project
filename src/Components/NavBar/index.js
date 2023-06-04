
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.jpg';
import './index.css';

const NavBar = () => {
  

  return (
    <nav>
  <div className="logo-container">
    <img src={logo} alt="Logo" className="logo" /> 
    <div className="store-name">
      <h1>Tesfaye's Online Store</h1>
      <h6>for Exceptional Quality, Unparalleled Service and Fair Prices"</h6> 
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