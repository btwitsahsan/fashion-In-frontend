import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
const register = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
}
// Register User
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
}

const authService = {
    register,
    login
}

export default authService;