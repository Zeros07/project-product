// src/app/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Sesuaikan URL sesuai dengan konfigurasi server Anda
});

export default api;
