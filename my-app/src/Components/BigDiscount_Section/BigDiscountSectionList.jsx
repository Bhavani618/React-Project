import React from 'react';
import BigDiscountSection from './BigDiscountSection';
import './BigDiscountSectionList.css';

const bigDiscountData = [
  {
    id: 1,
    offer: '50% OFF',
    image: "./Images/double-sofa-01.png",
    description: 'Stone and Beam Westview',
    rating: '4.5/5',
    price: '$100',
  },
  {
    id: 2,
    offer: '30% OFF',
    image: './images/double-sofa-02.png',
    description: 'Rivet Bigelow Modern',
    rating: '4.0/5',
    price: '$150',
  },
  {
    id: 3,
    offer: '20% OFF',
    image: './images/arm-chair-02.jpg',
    description: 'Balstar Chair',
    rating: '3.5/5',
    price: '$200',
  },
  {
    id: 4,
    offer: '10% OFF',
    image: './images/arm-chair-03.jpg',
    description: 'Helmar Chair',
    rating: '4.2/5',
    price: '$250',
  },
  {
    id: 5,
    offer: '40% OFF',
    image: './images/phone-03.png',
    description: 'Realme 8',
    rating: '4.8/5',
    price: '$300',
  },
  {
    id: 6,
    offer: '25% OFF',
    image: './images/phone-04.jpg',
    description: 'One Plus',
    rating: '3.9/5',
    price: '$350',
  },
];

function BigDiscountSectionList() {
  return (
    <>
    <h2 className='discount_heading'>Big Discount</h2>
    <div className="big-discount-section-list">
      {bigDiscountData.map(item => (
        <BigDiscountSection key={item.id} data={item} />
      ))}
    </div>
    </>
  );
}

export default BigDiscountSectionList;
