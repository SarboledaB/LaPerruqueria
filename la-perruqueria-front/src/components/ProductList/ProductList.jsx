import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard.jsx";
import "./ProductList.scss";

const PRODUCTS_PER_PAGE = 10;

const ProductList = ({ products }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() =>
    products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [products, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIdx = (page - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIdx, endIdx);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  return (
    <div className="productListContainer">
      <div className="productListLayout">
        <aside className="productListSidebar">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="searchInput"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Buscar productos por nombre"
          />
        </aside>
        <main className="productContent">
          <div className="productGrid">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-results">No se encontraron productos.</p>
            )}
          </div>
          {totalPages > 1 && (
            <div className="pagination-controls">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Anterior
              </button>
              <span>
                {page} / {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                Siguiente
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
