import React from 'react';
import './ArrivalList.css';
import ArrivalCard from './ArrivalCard';

const products = [
  { id: 1, name: "Apple iPhone 12 Pro", rating: 4, price: "$778", imgSrc: "./images/phone-01.jpg" },
  { id: 2, name: "Apple iPhone 12 Max", rating: 5, price: "$599", imgSrc: "./images/phone-02.jpg" },
  { id: 3, name: "Realme 8", rating: 3, price: "$600", imgSrc: "./images/phone-03.png" },
  { id: 4, name: "One Plus Nord", rating: 4, price: "$123", imgSrc: "./images/phone-04.jpg" },
  { id: 5, name: "Apple iPhone 13 Pro", rating: 5, price: "$199", imgSrc: "./images/phone-05.jpg" },
  { id: 6, name: "Samsung Galaxy S22", rating: 2, price: "$199", imgSrc: "./images/phone-06.jpg" },
  { id: 7, name: "Best Studio Wireless", rating: 4, price: "$179", imgSrc: "./images/wireless-01.png" },
  { id: 8, name: "Best EP Headphones", rating: 5, price: "$156", imgSrc: "./images/wireless-03.png" },
  { id: 9, name: "Black Headphones", rating: 3, price: "$188", imgSrc: "./images/wireless-02.png" },
  { id: 10, name: "Bluetooth Headphones", rating: 4, price: "$199", imgSrc: "./images/wireless-04.png" }
];

const ArrivalList = () => {
  return (
    <div className="arrival-list">
      <h2>New Arrivals</h2>
      <div className="arrival-cards">
        {products.map((product, index) => (
          <ArrivalCard key={product.id} product={product} position={index} />
        ))}
      </div>
    </div>
  );
};

export default ArrivalList;
