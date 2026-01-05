
// import axios from 'axios';

// const API_URL = (import.meta as any).env.VITE_API_URL || '';

// const token = localStorage.getItem('auth_token'); 

// const apiClient = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: token ? `Bearer ${token}` : undefined,
//   },
// });

// export default apiClient;


// apiClient.ts
import axios from 'axios';
const API_URL = (import.meta as any).env.VITE_API_URL || '';
const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
 
export default apiClient;