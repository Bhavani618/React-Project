import React from 'react';
import './BestSale.css';

const products = [
  { id: 1, name: 'Stone and  Beam Westview', image: './images/double-sofa-01.png', rating: 4, price: '$100.00' },
  { id: 2, name: 'Rivet Bigelow Modern', image: './images/double-sofa-02.png', rating: 3, price: '$150.00' },
  { id: 3, name: 'Amazon Brand Modern Sofa', image: './images/double-sofa-03.png', rating: 5, price: '$200.00' },
  { id: 4, name: 'Rivet Bigelow Modern', image: './images/double-sofa-02.png', rating: 2, price: '$250.00' },
  { id: 5, name: 'Fllufy Sheep Sofa', image: './images/single-sofa-01.jpg', rating: 4, price: '$300.00' },
  { id: 6, name: 'Faux Velvet Sofa', image: './images/single-sofa-02.jpg', rating: 3, price: '$350.00' },
  { id: 7, name: 'Fllufy Sheep Sofa', image: './images/single-sofa-03.jpg', rating: 4, price: '$400.00' },
  { id: 8, name: 'Modern Arm Sofa', image: './images/single-sofa-04.png', rating: 5, price: '$458.00' },
];

const renderStars = (rating) => {
  const yellowStar = '★';
  const emptyStar = '☆';
  const stars = yellowStar.repeat(rating) + emptyStar.repeat(5 - rating);
  return <div className="bestsale-product-rating">{stars}</div>;
};

const BestSale = () => {
  return (
    <div className="bestsale-container">
      <h1 className="bestsale-title">Best Sale</h1>
      <div className="bestsale-card-grid">
        {products.map((product, index) => (
          <div key={product.id} className={`bestsale-card ${index >= 6 ? 'centered' : ''}`}>
            <div className="bestsale-product-image-container">
              <img src={product.image} alt={product.name} className="bestsale-product-image" />
            </div>
            <div className="bestsale-product-details">
              <h2 className="bestsale-product-name">{product.name}</h2>
              {renderStars(product.rating)}
              <div className="bestsale-product-price">
                <span>{product.price}</span>
                <button className="bestsale-add-button">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSale;
