// services/productsService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

export const getProducts = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`);
  return response.data;
};
