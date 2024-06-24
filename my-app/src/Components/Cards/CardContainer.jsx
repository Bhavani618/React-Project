import React from 'react';
import CardComponent from './CardComponent';
import { faCar, faWallet, faHeadphones} from '@fortawesome/free-solid-svg-icons';
import './CardContainer.css';

const CardContainer = () => {
  const cards = [
    { icon: faCar, title: 'Free Shipping', description: 'Lorem ipsum dolor sit amet', backgroundColor: 'rgb(253 239 230)' },
    { icon: faWallet, title: 'Safe Payment', description: 'Lorem ipsum dolor sit amet', backgroundColor: 'rgb(206 235 233)' },
    { icon: faCar, title: 'Secure Payment', description: 'Lorem ipsum dolor sit amet', backgroundColor: 'rgb(226 242 178)' },
    { icon: faHeadphones, title: 'Back Guarantee', description: 'Lorem ipsum dolor sit amet', backgroundColor: 'rgb(214 229 251)'},
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <CardComponent key={index}
         icon={card.icon}
          title={card.title}
         description={card.description}
         backgroundColor={card.backgroundColor}
          />
      ))}
    </div>
  );
};

export default CardContainer;
