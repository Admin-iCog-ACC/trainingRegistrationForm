import axios from 'axios';
export const register = (data) =>
  axios.post('https://143.198.190.167:3000/register', data).then((res) => res.data);
