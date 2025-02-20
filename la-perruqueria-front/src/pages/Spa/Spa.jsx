import "./Spa.scss";
import Banner from '../../components/Banner/Banner.jsx';

const Spa = () => {
  return (
    <div className="spa-container">
      <Banner />
      <div className="spa-content">
        <h1 className="title">Spa de Mascotas - Un Rato de Lujo para tu Peludo! </h1>
        <p className="description">
          Dale a tu mascota la experiencia de spa que se merece.
          Nuestros servicios incluyen un baño de burbujas con shampoo hipoalergénico,
          secado con estilo, pedicura de uñas, limpieza de orejitas y un masaje relajante .
        </p>
        <div className="pricing-table">
          <table>
            <thead>
            <tr>
              <th>Tamaño</th>
              <th>Perro</th>
              <th>Gato</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Pequeño</td>
              <td>$45.000</td>
              <td>$35.000</td>
            </tr>
            <tr>
              <td>Mediano</td>
              <td>$60.000</td>
              <td>$40.000</td>
            </tr>
            <tr>
              <td>Grande</td>
              <td>$100.000</td>
              <td>$45.000</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="photo-gallery">
          <h2>¡Mira a nuestros clientes felices!</h2>
          <div className="photos">
            <img src="https://petpix.co/wp-content/uploads/Koda-Border-Collie00637-2.jpg"
                 alt="Perro disfrutando del spa" />
            <img src="https://petpix.co/wp-content/uploads/ZAT8379-scaled.jpg" alt="Gato relajado con masaje" />
            <img src="https://petpix.co/wp-content/uploads/Diana-Ortiz-Gatos01212-1.jpg"
                 alt="Baño de espuma y diversión" />
          </div>
        </div>
        <div className="booking">
          <a
            href="https://wa.me/1234567890"
            className="page-whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"
                 className="page-whatsapp-icon" />
            ¡Reserva tu cita ahora!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spa;