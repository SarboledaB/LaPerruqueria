// services/commentsService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/clients_comments";

export const getComments = async () => {
  const response = await axios.get(`${API_URL}?type=comment`);
  return response.data;
};

export const getTips = async () => {
  const response = await axios.get(`${API_URL}?type=tip`);
  return response.data;
};
