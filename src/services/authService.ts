import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

// Register User
const register = async (userData: any) => {
    const response = await axios.post(API_URL + "register", userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

// Login User
const login = async (userData: any) => {
    const response = await axios.post(API_URL + "login", userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

// Logout User
const logout = () => {
    localStorage.removeItem("user");
};

// Get Current User
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || "null");
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;
