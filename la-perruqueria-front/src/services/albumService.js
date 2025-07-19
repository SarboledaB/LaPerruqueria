// services/albumService.js
import axios from "axios";

const API_URL = `https://la-perruqueria-back.vercel.app/api/client_images`;

export const getPhotos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updatePhotoLikes = async (id, likes) => {
  const response = await axios.put(`${API_URL}/${id}`, { likes });
  return response.data;
};

export const addPhoto = async (photo) => {
  // photo debe ser un objeto con al menos { url }
  const response = await axios.post(API_URL, photo);
  return response.data;
};
