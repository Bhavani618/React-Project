import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div>
      <nav>
        <div>
          <div className="logo" onClick={handleLogoClick}>
            <FontAwesomeIcon icon={faLock} className="logo-icon" />MART
          </div>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><FontAwesomeIcon icon={faUser} /></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
