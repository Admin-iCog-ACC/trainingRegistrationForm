import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const login = async (data) => {const res = await api.post('/login',data)
console.log(res)
return res.data }
export const register = (data) =>
  api.post('/register', data).then((res) => res.data);
  export const apply = (data) =>
  api.post('/application', data).then((res) => res.data);