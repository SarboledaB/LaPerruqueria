import './CustomImage.scss';

const CustomImage = ({src}) => {
  return (
    <div className="image" key={src}>
      <img src={src} alt={`album image ${src}`} />
    </div>
  );
};

export default CustomImage;
