import { useState } from 'react';
import { useRouter } from 'next/router';
import Required from './Required';
import axios from 'axios';
import { useMutation } from 'react-query';
import { register } from '../utils/api';

function Register() {
  const { isLoading, data, error, mutate } = useMutation(register);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const sendRequest = () => {
    mutate({ country, email, phone });
    setCountry('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className=" max-w-2xl mx-auto bg-transparent flex flex-col justify-center mb-20">
      <div className="">
        <div className="text-3xl font-extrabold text-[#168c9e]  mt-2 text-center">
          Register Here
        </div>
        <div className="w-full mx-auto bg-white mt-4 p-8 border border-gray-300">
          <div className="space-y-6 ">
            {data && (
              <p className="flex justify-center text-green-500">
                {data?.message}
              </p>
            )}
            {/* <div className="flex flex-col">
              <label htmlFor="" className="label-style">
                Full Name:
              </label>
              <input
                type="text"
                className="appearance-none w-full md:w-2/3 p-1 px-2 rounded border border-gray-300  text-gray-800 outline-none"
              />
            </div> */}
            <div className="w-full flex flex-col">
              <label className="label-style ">Country:</label>
              <select
                name="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="select-style md:w-2/3"
              >
                <option value="">- Select -</option>
                <option>Ethiopia</option>
                <option>International</option>
              </select>
            </div>
            {country !== '' &&
              (country === 'Ethiopia' ? (
                <div className=" w-full flex flex-col">
                  <div className="flex space-x-1">
                    <label className="label-style">Phone Number:</label>
                    <div className="mt-2">
                      <Required />
                    </div>
                  </div>
                  <input
                    type="number"
                    className="appearance-none w-full md:w-2/3 p-1 px-2 rounded border border-gray-300  text-gray-800 outline-none"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="label-style ">Email: </label>
                    <Required />
                    <input
                      required
                      type="email"
                      name="email"
                      className="appearance-none w-full md:w-2/3 flex flex-col p-1 px-2 rounded border border-gray-300  text-gray-800 outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="label-style ">Phone Number: </label>
                    <Required hidden={true} />
                    <input
                      type="number"
                      name="phone"
                      className="appearance-none w-full md:w-2/3 flex flex-col p-1 px-2 rounded border border-gray-300  text-gray-800 outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              ))}
            {error && (
              <p className="text-red-400 mt-3">
                {error.response?.data?.message}
              </p>
            )}
            <button
              disabled={
                country === '' ||
                (country === 'Ethiopia' && phone === '') ||
                (country === 'International' && email === '')
              }
              onClick={sendRequest}
              className="py-2 px-8 rounded disabled:bg-gray-400 bg-blue-400 hover:bg-blue-600  text-white text-lg"
            >
              {isLoading ? 'Loading...' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
