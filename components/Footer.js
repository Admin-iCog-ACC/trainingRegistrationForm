import Image from 'next/image';
import React from 'react';
import useMediaQuery from '../custom_hooks/useMediaQuery';
import igg from '../public/logo-web_sm.png';
function Footer() {
  const isLarge = useMediaQuery('(min-width: 970px)');
  return (
    <div className="w-full bg-[#f6f9ff] border-b-1">
      <div className="p-10 flex justify-center items-center">
        <div className="space-y-7 space-x-3 py-5">
          <div>
            <h2 className="text-[#178c9f] font-bold text-2xl flex justify-center">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <div className="border-2 p-1 border-[#e7ebf5] bg-white  flex">
            <input
              type="email"
              name="email"
              placeholder="Email Address(*)"
              className="text-sm p-2.5 w-48 md:w-80 lg:mr-4"
            />
            <button
              type="submit"
              className="bg-[#178c9e] text-white px-5 md:px-8 py-2.5 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    <div className="bg-white">
      <div className={`w-full md:max-w-[1225px] mx-auto`}>
        <div className=" flex flex-wrap lg:gap-10 gap-5 ">
          <div className="text-sm w-full md:w-2/6 lg:py-10 py-5 mx-5 lg:mx-none">
            <div className="relative h-24 w-24">
              <Image src={igg} layout="fill" objectFit="contain" alt="" />
            </div>

            <div className="mb-4 text-md text-gray-500">
              iCog Anyone Can Code, a subsidiary of iCog Labs — Ethiopia’s first
              Artificial Intelligence and robotics lab, works on community
              outreach and research with the focus of tech education and
              entrepreneurship.
            </div>
            <div className="flex space-x-1">
              <p className="text-bold">Follow us on: </p>
              <span className="text-blue-500 space-x-1">
                <a href="https://www.facebook.com/icogacc">Facebook</a> |
                <a href="https://twitter.com/iCog_ACC">Twitter</a> |
                <a href="https://www.instagram.com/icogacc">Instagram</a> |
                <a href="https://www.linkedin.com/company/icog-anyone-can-code">
                  Linkedin
                </a>
              </span>
            </div>
          </div>
          <div className="text-[#168c9e] lg:py-10 py-5 mx-5 md:w-[10%] lg:mx-none">
            <h3 className="font-semibold text-base mb-7">USEFUL LINKS</h3>
            <ul className="list-desc space-y-5">
              <li>
                <a href="https://icogacc.com/about+us">About Us</a>
              </li>
              <li>
                <a href="https://icogacc.com/impact">Impact</a>
              </li>
              <li>
                <a href="https://icogacc.com/career">Career</a>
              </li>
            </ul>
          </div>
          <div
            className={`${
              isLarge ? 'footer-bg-img ' : ' '
            } md:w-[40%] w-full py-2 mx-5 lg:mx-0 lg:flex-none lg:px-1 flex flex-col items-center lg:items-start  `}
          >
            <h3 className="font-semibold text-[#168c9e] lg:pt-8 pt-3 text-base mb-3">CONTACT US</h3>
            <div
              className={` ${
                isLarge ? ' ' : 'footer-bg-img '
              } text-gray-500 text-sm  w-full flex flex-col lg:items-start lg:space-y-1 items-center h-48 lg:h-full space-y-5"`}
            >
              <p>Currently Remote, getting back to the office soon </p>
              <div>
                <span className="flex space-x-1">
                  <p className="font-medium">Phone: </p>
                  <p>+251- (0) -904262728</p>
                </span>
                <span className="flex space-x-1">
                  <p className="font-medium">Email: </p>
                  <p>info@icog-acc.com</p>
                </span>
              </div>
              <div>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="px-5 lg:px-none flex justify-center text-[#178c9f] text-sm py-8">
        <div className="space-y-2">
          <span>
            © Copyright 2022
            <strong className="font-bold">
              <span> iCog Anyone Can Code</span>
            </strong>
            . All Rights Reserved
          </span>
          <div className="flex justify-center text-sm space-x-1">
            <a
              href="https://mydesignafrica.com/"
              // target="_blank"
            >
              myDesignAfrica
            </a>
            <p>-</p>
            <a
              href="https://bootstrapmade.com/"
              //  target="_blank"
            >
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
