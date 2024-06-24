import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faLock } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
      <nav>
        <div>
        <div className="logo">  <FontAwesomeIcon icon={faLock} className="logo-icon" />MART</div>
        </div>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li><FontAwesomeIcon icon={faUser} /></li>
            <li><FontAwesomeIcon icon={faCartShopping} /></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
