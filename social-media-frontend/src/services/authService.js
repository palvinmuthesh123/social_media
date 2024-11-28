import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL+'/auth';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);