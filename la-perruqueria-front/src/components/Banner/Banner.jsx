import './Banner.scss';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt='Banner tienda' />
    </div>
  );
};

export default Banner;
