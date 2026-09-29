import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;