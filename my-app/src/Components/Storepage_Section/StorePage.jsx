import React from 'react';
import './Shop.css';

const products = [
];

const StorePage = () => {
    
  return (
    <div className="shop-page">
      <div className="background-image">
        <h1 className="title">Product Name</h1>
      </div>
      <div className="filter-search-bar">
        <div className="filter">
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
      </div>
      <div className="product-cards">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <div className="rating">
            </div>
            <div className="price-add">
              <span className="price">${product.price}</span>
              <button>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
