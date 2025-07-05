import './CustomFooter.scss';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} <a href="https://laperrukeriapets.com/">laperrukeriapets.com</a> Todos los derechos reservados.</p>
    </footer>
  );
};

export default CustomFooter;