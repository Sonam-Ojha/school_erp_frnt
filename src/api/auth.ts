import axios from 'axios';
const API_URL = (import.meta as any).env.VITE_API_URL || '';
if (!API_URL) {
  throw new Error('API URL not defined in .env');
}

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});
export interface LoginData {
  username: string;
  password: string;
  source?: string;
  ip?: string;
}

export interface OTPData {
  userId: string;
  otp: string;
}
export const login = async (username: string, password: string) => {
  try {
    
    const res = await apiClient.post('/login', {
      username,
      password,
      source: 'web',
    });

    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

// Check Consent API
export const checkConsent = async (data: LoginData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, data);
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

// Get SSO Token
export const getSSOToken = async (username: string) => {
  try {
    const res = await axios.get(`${API_URL}/sso-token?username=${username}`);
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

// Send Mobile OTP
export const mobileOtpSend = async (userId: string, mobile: string) => {
  try {
    const res = await axios.post(`${API_URL}/mobile-otp-send`, { userId, mobile });
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};
export const verifyConsent = async (data: { user_id: string; consent: boolean }) => {
  try {
    const res = await axios.post(`${API_URL}/verify-consent`, data);
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

// Verify OTP
export const verifyOtp = async (userId: string, otp: string) => {
  try {
    const res = await axios.post(`${API_URL}/verify-otp`, { userId, otp });
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};

// Update mobile number
export const updateMobileNo = async (userId: string, newMobile: string) => {
  try {
    const res = await axios.post(`${API_URL}/update-mobile`, { userId, newMobile });
    return res.data;
  } catch (err: any) {
    throw err.response ? err.response.data : err;
  }
};
