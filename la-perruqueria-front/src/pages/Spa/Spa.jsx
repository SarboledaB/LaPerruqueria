import "./Spa.scss";
import Banner from '../../components/Banner/Banner.jsx';

const Spa = () => {
  return (
    <div className="spa-page">
      <Banner />
      <section className="spa-container">
        <section className="spa-intro">
          <h1 className="spa-title">Un Día de Lujo para tu Mascota</h1>
          <p className="spa-subtitle">
            Ofrecemos una experiencia de spa completa para que tu compañero se sienta renovado, feliz y saludable. Descubre nuestros servicios.
          </p>
        </section>

        <section className="spa-services">
          <h2 className="section-heading">Nuestros Servicios de Spa</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-name">Baño y Secado Profesional</h3>
              <p className="service-price">Desde $35.000</p>
              <p className="service-description">Incluye baño con shampoo hipoalergénico, secado a mano y cepillado para un pelaje brillante.</p>
            </div>
            <div className="service-card">
              <h3 className="service-name">Corte y Estilo</h3>
              <p className="service-price">Desde $45.000</p>
              <p className="service-description">Corte de raza o personalizado, realizado por nuestros estilistas expertos para un look perfecto.</p>
            </div>
            <div className="service-card">
              <h3 className="service-name">Paquete Spa de Lujo</h3>
              <p className="service-price">Desde $100.000</p>
              <p className="service-description">La experiencia completa: baño, corte, pedicura, limpieza de oídos y un masaje relajante final.</p>
            </div>
          </div>
        </section>

        <section className="spa-gallery">
          <h2 className="section-heading">Clientes Felices</h2>
          <div className="gallery-grid">
            <img src="https://petpix.co/wp-content/uploads/Koda-Border-Collie00637-2.jpg" alt="Perro feliz después de su baño" />
            <img src="https://petpix.co/wp-content/uploads/ZAT8379-scaled.jpg" alt="Gato relajado durante su masaje" />
            <img src="https://petpix.co/wp-content/uploads/Diana-Ortiz-Gatos01212-1.jpg" alt="Mascota disfrutando de un baño de espuma" />
          </div>
        </section>

        <section className="spa-booking">
          <h2 className="section-heading">¿Listo para Consentirlos?</h2>
          <p className="booking-text">Contáctanos y agenda una cita. ¡Tu mascota te lo agradecerá!</p>
          <a href={`https://wa.me/573233041810?text=${encodeURIComponent(`Hola, estoy interesad@ en reservar una cita de spa para mi peludo`)}`} className="cta-button" target="_blank" rel="noopener noreferrer">
            Reservar Cita por WhatsApp
          </a>
        </section>
      </section>
    </div>
  );
};

export default Spa;