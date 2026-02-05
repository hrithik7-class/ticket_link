// src/utils/api.js
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  // change baseURL in one place when needed
  baseURL:"http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// attach auth token from cookie (if present)
api.interceptors.request.use((cfg) => {
  try {
    const token = Cookies.get("token") || Cookies.get("authToken"); // adapt name as needed
    if (token) {
      cfg.headers = cfg.headers || {};
      cfg.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    // ignore
  }
  return cfg;
});

export default api;
