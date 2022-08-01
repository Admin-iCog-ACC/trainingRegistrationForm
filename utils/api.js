import axios from 'axios';
export const register = (data) =>
  axios.post('http://143.198.190.167:3000/register', data).then((res) => res.data);
