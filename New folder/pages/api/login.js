import axios from 'axios';

export default async (req, res) => {
  const { headers, body } = req;
  try {
    const { data, headers: returnedHeaders } = await axios.post(
      'http://localhost:5000/user/signin',
      body,
      { headers }
    );

    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1].toString())
    );
    res.send(data);
  } catch ({ response: { status, data } }) {
    res.status(status).json(data);
  }
};
