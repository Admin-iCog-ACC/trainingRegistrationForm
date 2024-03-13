import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router';
function Banner() {
  const router = useRouter();
  return (
    <div className="max-w-[1225px] lg:mx-auto mx-16 mt-12 mb-20 ">
      <div className="flex flex-wrap gap-3">
        <div className="flex justify-center lg:justify-start">
          <div className="lg:w-1/2">
            <div className="flex flex-wrap ">
              <div className=" space-y-5">
                <h1 className="lg:text-[55px] text-[40px] text-center lg:text-left  font-bold text-[#168c9e]">
                  AYSRH Project
                </h1>
                <h3 className="lg:text-[26px] text-lg text-[#333333] leading-tight ">
                  Supported by David and Lucile Packard Foundation and in 
                  partnership with YMCA Ethiopia and MeSY movement, iCog-ACC
                  will be conducting a six month acceleration program.
                  This program will be targeting youth led or owned startups 
                  working on adolescents and youth sexual reproductive health.
                </h3>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start  mt-14">
              {/* <button
                className="bg-[#168c9e] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                onClick={(e) => router.push('/accelerator#accelerator-program')}
              >
                <p className="text-lg">Apply Here</p>
                <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
              </button> */}
            </div>
          </div>
          <div className="relative h-auto w-auto hidden lg:block lg:w-1/3">
            <Image
              layout="fill"
              objectFit="contain"
              alt=""
              src="/sextualHealth-.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
