// services/productsService.js
import axios from "axios";

const API_URL = `https://la-perruqueria-back-lw0c0uix9.vercel.app/api/products`;

export const getProducts = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`);
  return response.data;
};
