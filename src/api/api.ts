// src/api/api.ts
import axios from 'axios';

const baseURL = 'http://localhost:3001'; // change as needed

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default api;
