import axios from 'axios';
export const register = (data) =>
  axios.post('http://localhost:5001/register', data).then((res) => res.data);
