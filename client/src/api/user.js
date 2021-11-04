import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 3000
});

const USER_BASE_URL = "/users";
export const userAPI = {
  getUserInfo: async (userId) => await API.get(`${USER_BASE_URL}/${userId}`),
}