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
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
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
// ============= Foods ================
// ====================================

export const readAllFood = async () => {
  const resp = await api.get('/foods');
  return resp.data;
}

export const readOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
}

export const createFood = async (foodData) => {
  const resp = await api.post('/foods', {food: foodData});
  return resp.data;
}

export const updateFood = async (foodData, id) => {
  const resp = await api.put(`/foods/${id}`, {food: foodData});
  return resp.data;
}

export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp.data;
}

// ====================================
// ============= Flavors ==============
// ====================================

export const readAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

export const addFlavor = async (flavorId, id) => {
  const resp = await api.get(`/flavors/${flavorId}/foods/${id}`);
  return resp.data
}
