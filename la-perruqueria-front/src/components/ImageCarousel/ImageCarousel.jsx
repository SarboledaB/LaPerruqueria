import "./ImageCarousel.scss";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CustomImage from './CustomImage/CustomImage.jsx';

const ImageCarousel = ({ images }) => {

  const handleDragStart = (e) => e.preventDefault();

  const items = images.map((image) =>
    <CustomImage src={image} onDragStart={handleDragStart}/>
  );

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite={true}
      paddingLeft={60}
      disableDotsControls={true}
      disableSlideInfo={true}
      autoWidth={false}
      responsive={
        {
          0: {
            items: 1,
          },
          480: {
            items: 1.3
          },
          600: {
            items: 2,
            itemsFit: 'contain',
          },
          1024: {
            items: 3,
            itemsFit: 'contain',
          }
        }
      }
    />
  );
};

export default ImageCarousel;