import React from 'react';
import './Cards.scss';
import HeaderDivider from '../HeaderDivider/HeaderDivider.jsx';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      image: 'https://petpix.co/wp-content/uploads/2020/05/Zeus-Suberiano0038-300x300.jpg',
      title: 'SPA Y MIMOS',
      url: '/spa-de-mascotas'
    },
    {
      image: 'https://petpix.co/wp-content/uploads/ZAT8363.jpg',
      title: 'PETSHOP',
      url: '/petshop'
    },
    {
      image: 'https://petpix.co/wp-content/uploads/DSC08201-scaled.jpg',
      title: 'CONCENTRADOS Y ALIMENTOS',
      url: '/concentrados-y-alimentos'
    },
  ];

  const goToPage = (url) => {
    navigate(url);
  }

  return (
    <div>
      <HeaderDivider title={'Servicios'}/>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index} onClick={() => goToPage(card.url)}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;