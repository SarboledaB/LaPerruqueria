import React, { useEffect, useState } from "react";
import "./PetShop.scss";
import ProductList from '../../components/ProductList/ProductList.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import { getProducts } from "../../services/productsService";

const PetShop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('petshop');
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
    <div className="petshop-container">
      <Banner />
      <section className="petshop-intro-section">
        <h2 className="petshop-section-title">Estilo y Comodidad para tu Mascota</h2>
        <p className="petshop-section-description">
          Encuentra los mejores accesorios para tu compañero. Desde collares y camas hasta juguetes, todo para su bienestar.
        </p>
        <div className="petshop-cta">
          <a
            href={`https://wa.me/573233041810?text=${encodeURIComponent(`Hola, estoy interesad@ en algunos productos para mi peludo`)}`}
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

export default PetShop;
