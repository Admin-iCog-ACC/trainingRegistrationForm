import Image from 'next/image';
import React from 'react';

function ApplicationBanner() {
  return (
    <div className="max-w-4xl mx-auto my-10 font-raleway space-y-8">
      <div className="relative h-96 w-full">
        <Image
          src="/applicationBanner.jpg"
          className=" rounded-md"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-5xl text-gray-700 font-bold">
          Application Process
        </h1>
        <ul className="list-disc pl-8 text-lg tracking-wide text-[#333333]">
          <li>
            Applicants must submit their applications electronically through
            this webpage [INSERT LINK TO APPLICATION FORM]
          </li>
          <li>
            Applicants are strongly encouraged to begin the application process
            early to allow ample time to compile and complete the necessary
            information.
          </li>
          <li>
            All requested documentation must be submitted by the program
            deadline. Late applicants will not be considered for this program.
          </li>
          <li>
            After the first round of selection done by the application forms,
            applicants will undergo a second round of recruitment where they
            will be required to pitch their products.
          </li>
        </ul>
        <p className="text-lg text-[#333333]">
          Application Form Overview can be found{' '}
          <a
            href="https://drive.google.com/file/d/18Ge4LLZpxmOh3OT1V0XyiuTxvoPpXyVk/view?usp=sharing"
            target="_blank"
            className="text-[#1e7385] font-semibold"
          >
            {' '}
            Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default ApplicationBanner;
