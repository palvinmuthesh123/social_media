import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL+'/posts';

export const createPost = (content) =>
  axios.post(API_URL, { content }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

export const fetchPosts = (page = 1) =>
  axios.get(`${API_URL}?page=${page}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

export const likePost = (postId) =>
  axios.post(`${API_URL}/${postId}/like`, null, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
