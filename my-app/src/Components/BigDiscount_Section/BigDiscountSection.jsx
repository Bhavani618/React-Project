import React from 'react';
import './BigDiscountSection.css';

function BigDiscountSection({ data }) {
  const renderStars = (rating) => {
    const stars = [];
    const numStars = 5;

    const filledStars = Math.floor(rating); 
    const hasHalfStar = rating - filledStars >= 0.5; 

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">&#9733;</span>);
    }

    const emptyStars = numStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={filledStars + i + 1} className="star">&#9734;</span>);
    }

    return stars;
  };

  return (
    
    <div className="big-discount-section">
      <div className="offer">{data.offer}</div>
      <img src={data.image} alt={data.description} />
      <div className="card-content">
      <p>{data.description}</p>
      <div className="rating">{renderStars(data.rating)}</div>
      <div className="price-container">
        <div className="price">{data.price}</div>
        <button className="add-to-cart">
          <i className="plus-icon">+</i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default BigDiscountSection;
