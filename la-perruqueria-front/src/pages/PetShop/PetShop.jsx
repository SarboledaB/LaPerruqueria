import React from "react";
import "./PetShop.scss";
import ProductList from '../../components/ProductList/ProductList.jsx';
import Banner from '../../components/Banner/Banner.jsx';

const products = [
  {
    id: 1,
    name: "Collar para perro raza grande",
    price: "$15.000",
    image: "https://www.obipets.co/cdn/shop/files/COLLARCLOEGRANATE1.0_2048x.jpg?v=1701277058",
  },
  {
    id: 2,
    name: "Juguete para gato",
    price: "$18.500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikPq3CAcktbIhNP1v824wLyQRyo5yEDeWCQ&s",
  },
  {
    id: 3,
    name: "Cama para perro",
    price: "$25.000",
    image: "https://virtualmuebles.com/cdn/shop/files/71g_X2Sbf2L._AC_SL1500_3e28fc46-41a4-4dc4-a869-546bd27d89f0.jpg?v=1739593427",
  }
];

const PetShop = () => {
  return (
    <div className="petshopContainer">
      <Banner />
      <section className="pet-store-products">
        <h2 className="pet-store-title">🐾 ¡Dale a tu mascota el estilo y comodidad que merece! 🐾</h2>
        <p className="pet-store-description">
          Descubre nuestra increíble selección de <strong>collares elegantes</strong>,
          <strong>camas acogedoras</strong> y <strong>juguetes divertidísimos</strong>.
          ¡Tu mejor amigo peludo merece lo mejor!
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

export default PetShop;
