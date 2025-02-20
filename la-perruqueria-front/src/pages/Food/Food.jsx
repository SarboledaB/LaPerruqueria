import ProductList from '../../components/ProductList/ProductList.jsx';
import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import './Food.scss'

const products = [
  {
    id: 1,
    name: "Concentrado Premium para Perros Adultos",
    price: "$85.000",
    image: "https://i0.wp.com/www.ecovet.com.co/wp-content/uploads/2023/04/Comida-para-perros-agility-golg-pequenos-adultos-2.png?resize=300%2C300&ssl=1",
  },
  {
    id: 2,
    name: "Alimento Húmedo para Gatos - Salmón & Atún",
    price: "$12.500",
    image: "https://www.supermascotas.com.co/wp-content/uploads/2023/08/ComidaHumedaParaGatoHillsSalmon-1.png",
  },
  {
    id: 3,
    name: "Snack Natural para Perros - Huesitos de Pollo",
    price: "$18.000",
    image: "https://piensosanlu.com/wp-content/uploads/snack_natural_perro_huesitos_pollo_calcio-765x765.png",
  }
];


const Food = () => {
  return (
    <div className="food-container">
      <Banner />
      <section className="pet-store-food">
        <h2 className="pet-food-title">🥩🥕 ¡Nutrición deliciosa para tu peludo amigo! 🍖🐾</h2>
        <p className="pet-food-description">
          Descubre nuestra selección de <strong>alimentos premium</strong>,
          <strong>concentrados balanceados</strong> y <strong>snacks irresistibles</strong>.
          ¡Porque una mascota feliz comienza con una alimentación saludable!
        </p>
        <div className="booking">
          <a
            href="https://wa.me/1234567890"
            className="page-whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"
                 className="page-whatsapp-icon" />
            ¡Haz tu pedido aqui!
          </a>
        </div>
      <ProductList products={products} />
      </section>
    </div>
  );
};

export default Food;
