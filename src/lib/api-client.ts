import { getAppConfig } from "@/config";
import axios from "axios";

// client to call the backend API

const apiClient = axios.create({
    baseURL: getAppConfig<string>("publicAppUrlBackendApi"),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 15000,
});
// Interceptor to handle requests
apiClient.interceptors.request.use((config) => {
    return config;
});

// Interceptor to handle responses
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if (error.response) {
        //   // Server responded with a status other than 200 range
        //   //console.error("Server Error:", error.response.data);
        // } else if (error.request) {
        //   // Request was made but no response received
        //   //console.error("Network Error:", error.message);
        // } else {
        //   // Something else caused the error
        //   //console.error("Error:", error.message);
        // }
        return Promise.reject(error);
    }
);

export default apiClient;
