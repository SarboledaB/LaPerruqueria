// services/albumService.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/client_images`;

export const getPhotos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updatePhotoLikes = async (id, likes) => {
  const response = await axios.put(`${API_URL}/${id}`, { likes });
  return response.data;
};
