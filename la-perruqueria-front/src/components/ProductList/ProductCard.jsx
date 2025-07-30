import React from "react";
import "./ProductList.scss";

const ProductCard = ({ product }) => {
  // Etiquetas destacadas
  const labels = [];
  if (product.isNew) labels.push("Nuevo");
  if (product.isOffer) labels.push("Oferta");
  if (product.isTop) labels.push("Top ventas");

  // Alternativa visual para imagen ausente
  const imageUrl = product.image || "https://via.placeholder.com/400x400?text=Sin+Imagen";

  return (
    <div className="productCard" tabIndex={0} aria-label={`Producto: ${product.name}`}>  
      <div className="productCard__imgWrapper">
        <img
          src={imageUrl}
          alt={product.name || "Producto sin nombre"}
          className="productCard__img"
          loading="lazy"
        />
        <div className="productCard__labels">
          {labels.map((label, idx) => (
            <span key={idx} className={`productCard__label productCard__label--${label.toLowerCase().replace(' ', '-')}`}>{label}</span>
          ))}
        </div>
      </div>
      <div className="productCard__body">
        <h2 className="productCard__name" title={product.name}>{product.name}</h2>
        <div className="productCard__priceRow">
          {product.price && (
            <span className="productCard__price">${product.price}</span>
          )}
          {product.oldPrice && (
            <span className="productCard__oldPrice">${product.oldPrice}</span>
          )}
        </div>
  {/*      {product.rating && (
          <div className="productCard__rating" aria-label={`Valoración: ${product.rating} de 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`star${i < product.rating ? " filled" : ""}`}>★</span>
            ))}
          </div>
        )} */}
        <a
          className="productCard__whatsappBtn"
          href={`https://wa.me/573233041810?text=${encodeURIComponent(`Hola, estoy interesado en el producto ${product.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Comprar ${product.name} por WhatsApp`}
        >
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
