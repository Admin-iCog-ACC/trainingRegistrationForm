import axios from 'axios';

const api = axios.create({ baseURL: 'http://oyster-app-6mymk.ondigitalocean.app/api' });

export const login = async (data) => {
  const res = await api.post('/login', data);
  console.log(res);
  return res.data;
};
export const register = (data) =>
  api.post('/register', data).then((res) => res.data);
export const apply = (data) =>
  api.post('/application', data).then((res) => res.data);

export const getApplication = () =>
  api.get('/application').then((res) => res.data);
