import axios from 'axios';

export default async function register (req, res) {
  const { headers, body } = req;

  try {
    const { data, headers: returnedHeaders } = await axios.post(
      'http://143.198.190.167:5000/auth/register',
      body,
      {
        headers,
      }
    );
    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1].toString())
    );
    res.send(data);
  } catch ({ response: { status, data } }) {
    res.status(status).json(data);
  }
};
