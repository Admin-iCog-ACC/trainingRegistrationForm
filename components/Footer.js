import Image from 'next/image';
import React from 'react';
import useMediaQuery from '../custom_hooks/useMediaQuery';
import igg from '../public/logo-web_sm.png';
function Footer() {
  const isLarge = useMediaQuery('(min-width: 970px)');
  return (
    <div className="bg-[#f6f9ff] border-b-1">
      <div className="p-10 flex justify-center items-center">
        <div className="space-y-7 space-x-3 py-5">
          <div>
            <h2 className="text-[#178c9f] font-bold text-2xl flex justify-center">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <div className="border-2 p-1 border-[#e7ebf5] bg-white ">
            <input
              type="email"
              name="email"
              placeholder="Email Address(*)"
              className="text-sm p-2.5 md:w-80 mr-4"
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
      <div className="footer-bg-img py-14">
        <div
          className={`max-w-3xl lg:max-w-5xl ${isLarge ? 'mx-auto' : 'mx-14'}`}
        >
          <div className=" flex flex-wrap gap-12 ">
            <div className="text-sm w-full lg:w-96">
              <div className="relative h-24 w-24">
                <Image src={igg} layout="fill" objectFit="contain" />
              </div>

              <div className="mb-4">
                iCog Anyone Can Code, a subsidiary of iCog Labs — Ethiopia’s
                first Artificial Intelligence and robotics lab, works on
                community outreach and research with the focus of tech education
                and entrepreneurship.
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
            <div className="text-blue-400">
              <h3 className="font-bold text-xl mb-7">USEFUL LINKS</h3>
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

            <div className="">
              <h3 className="font-bold text-blue-400 text-xl mb-7">
                CONTACT US
              </h3>
              <div className="text-sm space-y-6">
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
      <div className="flex justify-center text-[#178c9f] text-sm py-8">
        <div className="space-y-2">
          <span>
            © Copyright 2022
            <strong className="font-bold">
              <span> iCog Anyone Can Code</span>
            </strong>
            . All Rights Reserved
          </span>
          <div className="flex justify-center text-sm space-x-1">
            <a href="https://mydesignafrica.com/" target="_blank" rel="noreferrer">
              myDesignAfrica
            </a>
            <p>-</p>
            <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
