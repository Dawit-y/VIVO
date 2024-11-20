import axios from "axios";

const api = axios.create({
  baseURL: "https://daveyimer.pythonanywhere.com/",
});

api.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  if (tokens) {
    config.headers.Authorization = `JWT ${tokens.access}`;
  }
  return config;
});

export default api;
