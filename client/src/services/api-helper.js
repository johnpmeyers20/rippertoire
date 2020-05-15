const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Users ================
// ====================================

export const getAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const postUser = async (userData) => {
  const resp = await api.post('/users', { user: userData });
  return resp.data;
}

export const updateUser = async (userData, id) => {
  const resp = await api.put(`/users/${id}`, { user: userData });
  return resp.data;
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp.data;
}

// ====================================
// ============= Songs ==============
// ====================================

export const getAllSongs = async () => {
  const resp = await api.get('/users/:user_id/songs');
  return resp.data;
}

export const addSong = async (songId, id) => {
  const resp = await api.get(`/users/${songId}/songs`);
  return resp.data
}
