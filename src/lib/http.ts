import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default http;
