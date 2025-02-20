import { useState } from "react";
import { Heart } from "lucide-react";
import "./CustomImage.scss";

const CustomImage = ({ src }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="image" key={src}>
      <img src={src} alt={`album image ${src}`} />
      <button className={`like-button ${liked ? "liked" : ""}`} onClick={handleLike}>
        <Heart />
        <span>{likes}</span>
      </button>
    </div>
  );
};

export default CustomImage;
