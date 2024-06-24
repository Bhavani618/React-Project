import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWallet, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import './CardComponent.css';

const CardComponent = ({ icon, title, description, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardComponent;
