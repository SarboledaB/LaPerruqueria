import './Banner.scss';
import banner from '../../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const goToPage = (url) => {
    navigate(url);
  }

  return (
    <div className="banner-container">
      <img src={banner} alt='Banner tienda' onClick={() => goToPage('/')}/>
    </div>
  );
};

export default Banner;
