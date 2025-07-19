// services/commentsService.js
import axios from "axios";

const API_URL = `https://la-perruqueria-back.vercel.app/api/clients_comments`;

export const getComments = async () => {
  const response = await axios.get(`${API_URL}?type=comment`);
  return response.data;
};

export const getTips = async () => {
  const response = await axios.get(`${API_URL}?type=tip`);
  return response.data;
};

export const createComment = async (comment) => {
  console.log(comment);
  const response = await axios.post(API_URL, {
    ...comment,
    type: "comment"
  });
  return response.data;
};

export const createTip = async (tip) => {
  console.log(tip);
  const response = await axios.post(API_URL, {
    ...tip,
    type: "tip"
  });
  return response.data;
};

