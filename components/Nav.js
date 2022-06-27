import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

function Nav() {
  const [scrollState, setScrollState] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(navModalState);
  useEffect(() => {
    const changeNavBackground = () => {
      setScrollState(window.scrollY > 65);
    };
    window.addEventListener('scroll', changeNavBackground);
    return () => window.removeEventListener('scroll', changeNavBackground);
  }, [scrollState]);

  return (
    <div
      className={
        scrollState
          ? 'w-full sticky top-0 z-10 h-28  bg-white shadow-lg'
          : 'w-full sticky top-0 z-10 h-28 bg-transparent '
      }
    >
      <div className="max-w-[1225px] lg:mx-auto mx-5 flex justify-between items-center ">
        <div
          className={scrollState ? 'h-28 w-28 relative' : 'h-32 w-32 relative'}
        >
          <Image
            src="/logo-web_sm.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="lg:flex text-base font-semibold hidden space-x-10 items-center">
          <a
            href="https://icogacc.com/"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Home</span>
          </a>

          <div className="group inline-block relative">
            <a className="text-black hover:text-[#178c9f] inline-flex items-center">
              <span className="mr-1">About Us</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="absolute hidden text-gray-700 py-5 group-hover:block w-48 bg-white ">
              <li className="">
                <a
                  className="rounded-t bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/about+us/our+team"
                >
                  Our Team
                </a>
              </li>
              <li className="">
                <a
                  className="bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/about+us/who+are+we"
                >
                  Who Are We
                </a>
              </li>
            </ul>
          </div>
          <div className="group inline-block relative">
            <a className="text-black hover:text-[#178c9f] inline-flex items-center">
              <span className="mr-1">Impact</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="absolute hidden text-gray-700 py-5 bg-white group-hover:block w-48">
              <li className="">
                <a
                  className="rounded-t bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/girls+can+code"
                >
                  Girls Can Code
                </a>
              </li>
              <li className="">
                <a
                  className="bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/public+workshops"
                >
                  Public Workshops
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/solve+it"
                >
                  Solve IT
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://icogacc.com/partners"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Partners</span>
          </a>

          <a
            href="https://icogacc.com/blog"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Blog</span>
          </a>

          <a
            className="text-black hover:text-[#178c9f] cursor-pointer inline-flex items-center "
            onClick={(e) => router.push('/')}
          >
            <span className="mr-1">AYSRH</span>
          </a>

          <a
            href="https://icogacc.com/career"
            className="text-black hover:text-[#178c9f] inline-flex items-center"
          >
            <span className="mr-1">Career</span>
          </a>
          <a
            href="https://icogacc.com/register"
            className="text-xl text-white px-5 py-3 rounded bg-[#178c9f]"
          >
            Register
          </a>
        </div>
        <div
          className="lg:hidden text-4xl text-[#178c9f]"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMenu />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Nav;

import React from 'react';
import { useRecoilState } from 'recoil';
import { navModalState } from '../atoms/navModal';

function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(navModalState);
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed top-7 w-full h-full  flex items-center justify-center`}
    >
      <div className="modal-overlay absolute w-full h-full bg-[#f7f9ff]"></div>

      <div className="modal-container fixed w-full h-full z-50 overflow-y-auto ">
        <div
          className=" absolute top-0 right-0 cursor-pointer  mt-4 mr-4 text-black text-sm z-50 "
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="fill-current text-[#178c9f]"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
        <div className="absolute left-0 flex flex-col  space-y-10 text-base font-semibold pl-10 items-start">
          <a
            href="https://icogacc.com/"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Home</span>
          </a>

          <div className="group inline-block relative">
            <a className="text-black hover:text-[#178c9f] inline-flex items-center">
              <span className="mr-1">About Us</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="absolute  hidden text-gray-700 py-5 group-hover:block w-48 bg-white ">
              <li className="">
                <a
                  className="rounded-t bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/about+us/our+team"
                >
                  Our Team
                </a>
              </li>
              <li className="">
                <a
                  className="bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/about+us/who+are+we"
                >
                  Who Are We
                </a>
              </li>
            </ul>
          </div>
          <div className="group inline-block relative">
            <a className="text-black hover:text-[#178c9f] inline-flex items-center">
              <span className="mr-1">Impact</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="absolute hidden text-gray-700 py-5 bg-white group-hover:block w-48">
              <li className="">
                <a
                  className="rounded-t bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/girls+can+code"
                >
                  Girls Can Code
                </a>
              </li>
              <li className="">
                <a
                  className="bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/public+workshops"
                >
                  Public Workshops
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-white hover:text-[#178c9f] py-2 px-4 block whitespace-no-wrap"
                  href="https://icogacc.com/impact/solve+it"
                >
                  Solve IT
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://icogacc.com/partners"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Partners</span>
          </a>

          <a
            href="https://icogacc.com/blog"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">Blog</span>
          </a>

          <Link
            href="/"
            className="text-black hover:text-[#178c9f] inline-flex items-center "
          >
            <span className="mr-1">AYSRH</span>
          </Link>

          <a
            href="https://icogacc.com/career"
            className="text-black hover:text-[#178c9f] inline-flex items-center"
          >
            <span className="mr-1">Career</span>
          </a>
          <a
            href="https://icogacc.com/register"
            className="text-xl text-white px-5 py-3 rounded bg-[#178c9f]"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export { Modal };
