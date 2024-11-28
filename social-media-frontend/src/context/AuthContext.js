import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL+'/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    const decoded = jwtDecode.jwtDecode(data.token)
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
