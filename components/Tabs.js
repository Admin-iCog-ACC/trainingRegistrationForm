import Image from 'next/image';
import { useState } from 'react';

function Tabs({ color }) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="max-w-[1225px] mx-auto flex font-raleway">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none  pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 flex-auto last:mr-0  text-center border">
              <a
                className={
                  ' font-semibold text-xs lg:text-base  px-5 py-3 shadow-lg rounded block leading-normal  ' +
                  (openTab === 1
                    ? 'text-white bg-[#178c9e]'
                    : 'text-black bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Overview
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border">
              <a
                className={
                  ' font-semibold text-xs lg:text-base px-5 py-[2.5px] sm:py-3 shadow-lg rounded block leading-normal  ' +
                  (openTab === 2
                    ? 'text-white bg-[#178c9e]'
                    : 'text-black bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Working Space
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border">
              <a
                className={
                  ' font-semibold text-xs lg:text-base px-5 py-[2.5px] sm:py-3 shadow-lg rounded block leading-normal  ' +
                  (openTab === 3
                    ? 'text-white bg-[#178c9e]'
                    : 'text-black bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Seed Funding
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border">
              <a
                className={
                  ' font-semibold text-xs lg:text-base px-5 py-3 shadow-lg rounded block leading-normal  ' +
                  (openTab === 4
                    ? 'text-white bg-[#178c9e]'
                    : 'text-black bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Eligibility
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-md font-raleway">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`flex flex-wrap md:flex-nowrap gap-3 flex-row-reverse ${
                    openTab === 1 ? 'block' : 'hidden'
                  }`}
                  id="link1"
                >
                  <div className="relative h-56 w-full md:w-1/2">
                    <Image
                      src="/overview.jpg"
                      layout="fill"
                      className="rounded"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 lg:mt-0 md:w-1/2 space-y-3 ">
                    <p>
                      The first step in the accelerator process is the{' '}
                      <strong>application</strong>. In this step candidates will
                      fill out an online registration form through which we
                      collect background information on founders and their
                      startups. It is through this form that we are given
                      insights into our applicants enabling us to assess the
                      potential of each startup and select those that are fit to
                      join the program.&nbsp;
                    </p>
                    <p>
                      <strong>3-month accelerator program</strong>
                    </p>
                    <p>
                      During the three-month program, startups will be equipped
                      with the knowledge and expertise necessary to change their
                      startup into a competitive business.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap md:flex-nowrap gap-3 flex-row-reverse ${
                    openTab === 2 ? 'block' : 'hidden'
                  }`}
                  id="link2"
                >
                  <div className="relative h-56 w-full md:w-1/2">
                    <Image
                      src="/office.jpg"
                      layout="fill"
                      className="rounded"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 lg:mt-0 md:w-1/2 space-y-3 ">
                    <p>
                      Startups that join will have free access to a co-working
                      space for <strong> 6 month </strong> in which teams from different projects work in a
                      dynamic environment to scale their business. It is within
                      these spaces that we will be working closely with founders
                      and Co-founders to build their startups as they are
                      provided with mentorship and input from the accelerator
                      team and partners.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap md:flex-nowrap gap-3 flex-row-reverse ${
                    openTab === 3 ? 'block' : 'hidden'
                  }`}
                  id="link3"
                >
                  <div className="relative h-56 w-full md:w-1/2">
                    <Image
                      src="/funding.png"
                      layout="fill"
                      className="rounded"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 lg:mt-0 md:w-1/2">
                    <p>
                      There will be ETB 455,100.00 in direct and ETB 227,550.00
                      in technical support provided to each startups in
                      completing the accelerator program successfully. The seed
                      fund provided to startups will not only help to cover
                      early-stage business expenses but may also be the key to
                      improving different aspects of their current
                      product/service. Please be reminded that only startups
                      that are selected for the second stage of the accelerator
                      program will be provided seed funding.
                    </p>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:h-72 mt-3  ${
                    openTab === 4 ? 'block' : 'hidden'
                  }`}
                  id="link4"
                >
                  <div className="relative h-56 lg:h-full w-full  lg:order-last">
                    <Image
                      src="/eligibility.jpeg"
                      layout="fill"
                      className="rounded"
                      objectFit="contain"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 lg:mt-0 space-y-3 text-lg">
                    <h4 className="font-bold text-xl">Eligible Applicants </h4>
                    <h4>Eligible applicants must be:</h4>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Age between 18 and 35 at time of application</li>
                      <li>Resident and national of Ethiopia</li>
                      <li>
                        Product or service business idea on{' '}
                        <strong>
                          Adolescents&apos;s and Youth Sexual Reproductive
                          Health
                        </strong>
                      </li>
                      <li>
                        Ability to commit a total of 6 months under this program
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
