import React from 'react';

import welcomeImage from '../../assets/welcome.jpg';
import './WelcomeModal.scss';

const WelcomeModal = ({ onClose }) => {
  return (
    <div className="welcome-modal-overlay" onClick={onClose}>
      <div className="welcome-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={welcomeImage} alt="Bienvenida a La Perruquería" />
      </div>
    </div>
  );
};

export default WelcomeModal;
