import "./Spa.scss";
import Banner from '../../components/Banner/Banner.jsx';

const Spa = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return (
    <div className="spa-page">
      <Banner />
      <section className="spa-container">
        <section className="spa-intro">
          <h1 className="spa-title">Baño y Secado de Lujo para tu Mascota</h1>
          <p className="spa-subtitle">
            Ofrecemos una experiencia de baño completo para que tu compañero se sienta renovado, feliz y saludable. Descubre nuestros servicios.
          </p>
        </section>

        <section className="spa-services">
          <h2 className="section-heading">Listado de Precios Baños</h2>
          <div className="spa-table-wrapper">
            <p className="spa-table-note">
              <strong>Nota:</strong> El valor puede variar dependiendo el tamaño y las condiciones en las que llegue tu peludo.
            </p>
            <table className="spa-price-table">
              <thead>
                <tr>
                  <th>Raza / Tipo de Mascota</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Yorki, Pomerania y Shitzú</td><td>$43.000 a $48.000</td></tr>
                <tr><td>Golden Retriever</td><td>$58.000 a $63.000</td></tr>
                <tr><td>Criollitos (depende de su corte, tamaño)</td><td>$28.000 a $45.000</td></tr>
                <tr><td>Cocker</td><td>$48.000 a $50.000</td></tr>
                <tr><td>Bull Dog</td><td>$43.000 a $48.000</td></tr>
                <tr><td>Pincher</td><td>$28.000 a $30.000</td></tr>
                <tr><td>Schnauzer</td><td>$48.000 a $50.000</td></tr>
                <tr><td>Husky</td><td>$85.000 a $100.000</td></tr>
                <tr><td>Samoyedo</td><td>$83.000 a $100.000</td></tr>
                <tr><td>Maltipoo</td><td>$43.000 a $48.000</td></tr>
                <tr><td>Gatos (depende de su tamaño, pelo y dificultad en el baño)</td><td>$43.000 en adelante</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="spa-gallery">
          <h2 className="section-heading">Clientes Felices</h2>
          <div className="gallery-grid">
            <img src="https://firebasestorage.googleapis.com/v0/b/laperrukeria-be761.firebasestorage.app/o/Martin-bano.jpeg?alt=media&token=76fa1bf1-9bf8-4453-bb02-7ef41c934ddf" alt="Perro feliz después de su baño" />
          </div>
        </section>

        <section className="spa-booking">
          <h2 className="section-heading">¿Listo para Consentirlos?</h2>
          <p className="booking-text">Contáctanos y agenda una cita. ¡Tu mascota te lo agradecerá!</p>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, estoy interesad@ en reservar una cita de spa para mi peludo`)}`} className="cta-button" target="_blank" rel="noopener noreferrer">
            Reservar Cita por WhatsApp
          </a>
        </section>
      </section>
    </div>
  );
};

export default Spa;