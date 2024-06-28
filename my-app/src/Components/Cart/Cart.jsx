// src/components/Cart.js
import React from 'react';
import './Cart.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="./images/phone-05.jpg" alt="Product" />
      </div>
      <div className="product-details">
        <h2>Apple iPhone 13Pro</h2>
        <p><span>$899.00*2</span>$1798.00</p>
      </div>
      <button className="close-button">X</button>
      <div className="quantity-controls">
        <button className="increment-button">+</button>
        <button className="decrement-button">-</button>
      </div>
    </div>
  );
};

const SummaryCard = () => {
  return (
    <div className="summary-card">
      <h2>Cart Summary</h2>
      <hr></hr>
      <p className='price_list'>Total Price:</p>
      <p>$1798.00</p>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="product-card-container">
        <ProductCard />
      </div>
      <div className="summary-card-container">
        <SummaryCard />
      </div>
    </div>
  );
};

export default Cart;
