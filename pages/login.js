import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import * as api from '../utils/sendAuthRequest';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { isLoading, data, mutate } = useMutation(api.login);
  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  if (data && data['status'].toLowerCase() === 'success') {
    router.push('/');
  }

  return (
    <div className="flex justify-center items-center bg-[#f6f9ff]">
      <div className="max-w-6xl h-96 flex justify-center mx-auto shadow-lg p-10 bg-white">
        <div className="">
          <div className="mx-2 flex-1">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={handleSetEmail}
              name="email"
              className="w-full border border-grey-400 outline-none"
            />
          </div>
          <div className="mx-2 flex-16">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={handleSetPassword}
              name="password"
              className="w-full border border-grey-400 outline-none"
            />
          </div>
        </div>
        {data && data['status'].toLowerCase() === 'failed' && (
          <p className="text-red-500 text-sm">{data['message']}</p>
        )}
        <button
          onClick={handleLogin}
          className="bg-blue-500 p-1 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Login;

export function getServerSideProps({ req, res }) {
  const { cookies } = req;
  const jwt = cookies.jwt;

  try {
    verify(jwt, process.env.SECRET_KEY);
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
