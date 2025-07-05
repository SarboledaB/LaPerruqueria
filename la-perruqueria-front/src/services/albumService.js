// services/albumService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/client_images";

export const getPhotos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updatePhotoLikes = async (id, likes) => {
  const response = await axios.put(`${API_URL}/${id}`, { likes });
  return response.data;
};
