import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5140/api",
});

export default api;