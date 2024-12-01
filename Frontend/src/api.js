import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Backend API URL

// Create an axios instance with default configuration
const api = axios.create({
  baseURL: API_URL,
});

// Set the JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token); // Store the token
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Register function
export const registerUser = async (userDetails) => {
  try {
    const response = await api.post('/auth/register', userDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products', productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a product
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await api.put(`/products/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
