import { verify } from 'jsonwebtoken';
import React from 'react';

function Aa() {
  return <div className="text-5xl flex justify-center">protected route</div>;
}

export default Aa;

export function getServerSideProps({ req, res }) {
  const { cookies } = req;
  const jwt = cookies.jwt;

  // const url = req.nextUrl;
  // url.pathname = '/login';
  try {
    console.log('here');
    verify(jwt, process.env.SECRET_KEY);
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/login',
      },
    };
  }
}
