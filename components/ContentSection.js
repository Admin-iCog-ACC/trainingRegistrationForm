import Image from 'next/image';
import React from 'react';

function ContentSection() {
  return (
    <div className="max-w-5xl mx-auto my-36">
      <div className="space-y-2">
        <h2 className="text-3xl tracking-wide pb-2 font-bold ">AYSRH</h2>
        <div className="bg-[#1593a7] w-[50px] h-[3px] "></div>
        <h2 className="text-2xl tracking-wide pt-2">AYSRH Project</h2>
        <p className="-mt-5">
          The younger generation looks for digital platforms for information
          about their bodies, health and relationships; yet often has a hard
          time finding credible sources. This campaign is designed to
          disseminate positive AYSRH information.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
        <div
          className="py-10 px-5 bg-white flex flex-col items-center group hover:shadow-xl transition duration-500 space-y-4 w-96
        "
        >
          <div className="relative h-28 w-28 ">
            <Image
              src="/campaign.png"
              className="grayscale group-hover:grayscale-0"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h4 className="font-bold text-2xl">AYSRH Campaign</h4>
          <p className="text-sm">
            The younger generation looks for digital platforms for information
            about their bodies, health and relationships; yet often has a hard
            time finding credible sources. This campaign is designed to
            disseminate positive AYSRH information to educate the Adolescents
            and Youth over the course of 12 months.
          </p>
        </div>
        <div className="py-10 px-5 bg-white flex flex-col items-center group hover:shadow-xl transition duration-500 space-y-4 w-96">
          <div className="relative h-28 w-28 ">
            <Image
              src="/rocket.png"
              className="grayscale group-hover:grayscale-0"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h4 className="font-bold text-2xl">AYSRH Accelerator Program</h4>
          <p className="text-sm">
            This acceleration program is organized for youth owned/led tech
            start-ups working on advancing AYSRH (Adolescents and Youth Sexual
            Reproductive Health). These start-ups that are already engaged in
            SRH will take part in various training such as media literacy skills
            and AYSRH value clarification and mentorship programs.
          </p>
          <a className="text-[#1593a7] font-semibold" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
