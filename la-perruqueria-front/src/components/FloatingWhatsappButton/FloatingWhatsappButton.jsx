import React from "react";
import "./FloatingWhatsappButton.scss"; // Archivo SCSS para los estilos

const FloatingWhatsappButton = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
    >
      <svg className="whatsapp-text" viewBox="0 0 100 50">
        <path id="curve" d="M10,45 Q50,-10 90,45" fill="transparent"/>
        <text width="100" fill="white">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Domicilios
          </textPath>
        </text>
      </svg>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default FloatingWhatsappButton;
