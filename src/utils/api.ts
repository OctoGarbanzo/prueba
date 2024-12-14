import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const api = {
  login: async (data: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  },

  register: async (data: any) => {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },

  testDbConnection: async (config: any) => {
    const response = await axios.post(`${API_URL}/admin/test-db`, config);
    return response.data;
  },

  saveDbConfig: async (config: any) => {
    const response = await axios.post(`${API_URL}/admin/save-db-config`, config);
    return response.data;
  }
};