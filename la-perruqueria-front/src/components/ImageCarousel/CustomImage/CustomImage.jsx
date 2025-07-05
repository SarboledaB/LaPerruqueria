import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Heart } from "lucide-react";
import { updatePhotoLikes } from "../../../services/albumService";
import "./CustomImage.scss";

const CustomImage = ({ src }) => {
  const { id, url, likes } = src;
  const [likesPerPhoto, setLikesPerPhoto] = useState(likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedImageIds = Cookies.get("likedImageIds");
    if (likedImageIds) {
      const likedImageIdsArr = JSON.parse(likedImageIds);
      if (likedImageIdsArr.includes(id)) {
        setLiked(true);
        setLikesPerPhoto(likesPerPhoto);
      }
    }
  }, [id]);

    const handleLike = async () => {
    const newLikedState = !liked;
    const newLikesCount = newLikedState ? likesPerPhoto + 1 : likesPerPhoto - 1;

    setLiked(newLikedState);
    setLikesPerPhoto(newLikesCount);

    try {
      await updatePhotoLikes(id, newLikesCount);

      const likedImageIds = Cookies.get("likedImageIds")
        ? JSON.parse(Cookies.get("likedImageIds"))
        : [];

      if (newLikedState) {
        if (!likedImageIds.includes(id)) {
          likedImageIds.push(id);
        }
      } else {
        const index = likedImageIds.indexOf(id);
        if (index > -1) {
          likedImageIds.splice(index, 1);
        }
      }
      Cookies.set("likedImageIds", JSON.stringify(likedImageIds), { expires: 365 });
    } catch (error) {
      console.error("Failed to update likes:", error);
      // Revert state if API call fails
      setLiked(!newLikedState);
      setLikesPerPhoto(likesPerPhoto);
    }
  };

  return (
    <div className="image" key={id}>
      <img src={url} alt={`album image ${id}`} />
      <button className={`like-button ${liked ? "liked" : ""}`} onClick={handleLike}>
        <Heart />
        <span>{likesPerPhoto}</span>
      </button>
    </div>
  );
};

export default CustomImage;
