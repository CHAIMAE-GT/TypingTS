// api.js

import axios from 'axios';
import { getAuthToken } from './auth'; // Import the utility function

// Base URL of your API
const BASE_URL = 'http://your-django-backend-url/api'; // Update this with your actual backend URL

// Create an instance of axios with custom configurations
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in the request headers
api.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Function to fetch custom texts
export const getCustomTexts = async () => {
    try {
        const response = await api.get('/custom-texts/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to create custom text
export const createCustomText = async (textData) => {
    try {
        const response = await api.post('/custom-texts/', textData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Similarly, implement functions for updating and deleting custom texts

export default api; // Export the configured axios instance
