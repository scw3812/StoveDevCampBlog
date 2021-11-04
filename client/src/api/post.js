import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 3000
});

const multiPartAPI = axios.create({
  baseURL: "http://localhost:8001",
  headers : {'Content-type' : 'multipart/form-data' },
  timeout: 3000
})

const POST_BASE_URL = "/posts";
export const postAPI = {
  postPost: async (body) => await API.post(`${POST_BASE_URL}`, body),
  postImage: async (body) => await multiPartAPI.post(`${POST_BASE_URL}/image`, body),
  getPosts: async (userId, page) => await API.get(`${POST_BASE_URL}/${userId}/${page}`),
}