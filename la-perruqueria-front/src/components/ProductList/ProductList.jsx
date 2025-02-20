import React from "react";
import ProductCard from "./ProductCard.jsx";
import "./ProductList.scss";

const ProductList = ({products}) => {
  return (
    <div className="productListContainer">
      <div className="productGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
