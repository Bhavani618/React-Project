import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="column">
        <div className="logo">  <FontAwesomeIcon icon={faLock} className="logo-icon" />MART</div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae consequuntur nobis numquam ea rerum eius, mollitia recusandae facilis? Recusandae voluptates sequi quis earum aliquam deserunt dolorum incidunt necessitatibus sed!
        </p>
      </div>
      <div className="column">
        <h3>About Us</h3>
        <ul className="list">
          <li>Career</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="column">
        <h3>Customer Care</h3>
        <ul className="list">
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <ul className="list">
          <li className='address_footer'>70 Washington Square South, New York, NY 10012, United States</li>
          <li>Email: example@gmail.com</li>
          <li>Phone: +1123456789</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
