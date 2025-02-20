import React from "react";
import "./ProductList.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
