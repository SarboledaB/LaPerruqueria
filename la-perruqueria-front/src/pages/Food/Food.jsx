import ProductList from '../../components/ProductList/ProductList.jsx';
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import { getProducts } from "../../services/productsService";
import './Food.scss'

const Food = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('alimentos');
        setProducts(data);
      } catch (err) {
        setError("Error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="food-container">
      <Banner />
      <section className="food-intro-section">
        <h2 className="food-section-title">Nutrición de Calidad para tu Mascota</h2>
        <p className="food-section-description">
          Explora nuestra selección de alimentos premium, concentrados y snacks saludables. Dale a tu compañero la nutrición que se merece.
        </p>
        <div className="food-cta">
          <a
            href="https://wa.me/1234567890"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Realizar Pedido por WhatsApp
          </a>
        </div>
        <ProductList products={products} />
      </section>
    </div>
  );
};

export default Food;
