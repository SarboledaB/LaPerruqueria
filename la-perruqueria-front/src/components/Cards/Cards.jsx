import React from 'react';
import './Cards.scss';
import HeaderDivider from '../HeaderDivider/HeaderDivider.jsx';
import { useNavigate } from 'react-router-dom';
import SPA from '../../assets/SPA.png';
import PETSHOP from '../../assets/PETSHOP.webp';
import CONCENTRADOS from '../../assets/CONCENTRADOS.webp';

const Cards = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      image: SPA,
      title: 'SPA Y MIMOS',
      url: '/spa-de-mascotas'
    },
    {
      image: PETSHOP,
      title: 'PETSHOP',
      url: '/petshop'
    },
    {
      image: CONCENTRADOS,
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