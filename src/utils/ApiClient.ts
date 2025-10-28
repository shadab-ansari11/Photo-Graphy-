import axios from "axios";
import { store } from "../redux/store";
import { BASE_URL } from "../services/endpoints";

// Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Add Token from Redux)
apiClient.interceptors.request.use(
  (config: any) => {
    const { token } = store.getState().auth;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: any) => response.data,
  (error: any) => {
    console.log("API Error: ", error);

    if (error.response?.status === 401) {
      console.log("Unauthorized - Token may have expired");
      // Optional: Redux Logout or token refresh logic process
    }

    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
