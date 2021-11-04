import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 3000
});

const COMMENT_BASE_URL = "/comments";
export const commentAPI = {
  getComments: async (postId) => await API.get(`${COMMENT_BASE_URL}/${postId}`),
  postComment: async (body) => await API.post(`${COMMENT_BASE_URL}`, body),
}