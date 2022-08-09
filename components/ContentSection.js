import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

function ContentSection() {
  const router = useRouter();
  return (
    <div className="max-w-[1225px] mx-auto my-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div className="space-y-2">
          <h2 className="text-4xl tracking-wide pb-2 font-bold ">AYSRH</h2>
          <div className="bg-[#1593a7] w-[50px] h-[3px] "></div>
          <h2 className="text-3xl tracking-wide pt-2">AYSRH Project</h2>
          <p className="-mt-5 text-md text-gray-700">
            The younger generation looks for digital platforms for information
            about their bodies, health and relationships; yet often has a hard
            time finding credible sources. This campaign is designed to
            disseminate positive AYSRH information.
          </p>
        </div>
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
              alt=""
            />
          </div>
          <h4 className="font-bold text-2xl">Wede Salon Campaign</h4>
          <p className="text-sm text-gray-700 text-center">
            The younger generation looks for digital platforms for information
            about their bodies, health and relationships; yet often has a hard
            time finding credible sources. This campaign is designed to
            disseminate positive adolescent and youth sextual reproductive health 
            information to educate the Adolescents
            and Youth.
          </p>
          <span className='text-[#1593a7] font-semibold text-center'>
           <a href='https://wedesalon.blogspot.com/2022/08/blog-post.html'>Wedesalon Blog</a>
          </span>
          <div className="flex space-x-1">
            <span className="text-[#1593a7] font-semibold space-x-1">
              <a href="https://www.facebook.com/wedesalon/">Facebook</a> |
              <a href="https://twitter.com/wedesalon?t=ZaEFuL2g1FQhUfDqulAfbw&s=09">
                Twitter
              </a>{' '}
              |
              <a href="https://instagram.com/wede_salon?igshid=YmMyMTA2M2Y=">
                Instagram
              </a>{' '}
              |<a href="https://vm.tiktok.com/ZMNdLCwG7/">Tiktok</a>
            </span>
          </div>
        </div>
        <div className="py-10 px-5 bg-white flex flex-col items-center group hover:shadow-xl transition duration-500 space-y-4 w-96">
          <div className="relative h-28 w-28 ">
            <Image
              src="/rocket.png"
              className="grayscale group-hover:grayscale-0"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h4 className="font-bold text-2xl">AYSRH Accelerator Program</h4>
          <p className="text-sm text-gray-700 text-center">
            This acceleration program is organized for youth owned/led tech
            start-ups working on advancing AYSRH (Adolescents and Youth Sexual
            Reproductive Health). These start-ups that are already engaged in
            SRH will take part in various training such as media literacy skills
            and AYSRH value clarification and mentorship programs.
          </p>
          <button
            className="text-[#1593a7] font-extrabold"
            onClick={(e) => router.push('/accelerator#accelerator-program')}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
