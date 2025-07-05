// services/productsService.js
import axios from "axios";

const API_URL = `https://la-perruqueria-back-lw0c0uix9.vercel.app/api/products`;

export const getProducts = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      Accept: "application/json",
    },
  });
  return response.data;
};
