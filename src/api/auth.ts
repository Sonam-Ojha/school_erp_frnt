import axios from 'axios';

const API_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:5000/api/auth';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = async (userData: any) => {
  try {
    const res = await apiClient.post('/register', userData);
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

export const login = async (userData: any) => {
  try {
    const res = await apiClient.post('/login', userData);
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

export const logout = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('auth_user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

// Stubs for legacy components
export const updateMobileNo = async (userId: string, newMobile: string) => { console.log(userId, newMobile); return { data: { status: true, msg: 'Success' } }; };
export const verifyOtp = async (userId: string, otp: string) => { console.log(userId, otp); return { data: { status: true, msg: 'Success' } }; };
export const mobileOtpSend = async (userId: string, mobile: string) => { console.log(userId, mobile); return { data: { status: true, msg: 'Success' } }; };
export const checkConsent = async (data: any) => { console.log(data); return { data: { status: true, msg: 'Success' } }; };
export const verifyConsent = async (data: any) => { console.log(data); return { data: { status: true, msg: 'Success' } }; };
