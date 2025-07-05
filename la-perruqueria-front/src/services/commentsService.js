// services/commentsService.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/clients_comments`;

export const getComments = async () => {
  const response = await axios.get(`${API_URL}?type=comment`);
  return response.data;
};

export const getTips = async () => {
  const response = await axios.get(`${API_URL}?type=tip`);
  return response.data;
};
