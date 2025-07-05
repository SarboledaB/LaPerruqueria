import React from 'react';
import './WelcomeModal.scss';

const WelcomeModal = ({ onClose }) => {
  return (
    <div className="welcome-modal-overlay" onClick={onClose}>
      <div className="welcome-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src="https://petpix.co/wp-content/uploads/Koda-Border-Collie00637-2.jpg" alt="Bienvenida a La Perruquería" />
      </div>
    </div>
  );
};

export default WelcomeModal;
