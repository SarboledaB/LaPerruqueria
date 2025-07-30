// services/productsService.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/products`;

export const getProducts = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`);
  return response.data;
};
