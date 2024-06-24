import React from 'react';
import './ArrivalCard.css';

const ArrivalCard = ({ product, position }) => {
  const { name, rating, price, imgSrc } = product;

  const cardClass = position === 9 ? 'arrival-card center' : 'arrival-card';

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
  ));

  return (
    <div className={cardClass}>
      <img src={imgSrc} alt={name} className="arrival-card-image" />
      <div className="arrival-card-details">
        <h3 className="arrival-card-name">{name}</h3>
        <div className="arrival-card-rating">{stars}</div>
        <div className="arrival-card-price-section">
          <p className="arrival-card-price">{price}</p>
          <button className="arrival-card-add">+</button>
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
