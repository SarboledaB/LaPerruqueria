import React from "react";
import "./HeaderDivider.scss"; // Archivo SCSS para los estilos

const HeaderDivider = ({ title }) => {
  return (
    <div className="header-divider">
      <h1 className="header-divider-title">{title}</h1>
      <div className="header-divider-line line1"></div>
    </div>
  );
};

export default HeaderDivider;