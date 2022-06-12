import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import {useRouter} from 'next/router';
function Banner() {
  const router = useRouter()
  return (
    <div className="max-w-[1225px] mx-auto mt-12 mb-20 ">
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'> 
      <div>

      <div className="flex flex-wrap ">
        <div className=" space-y-1">
          <h1 className="text-[55px] font-bold text-[#168c9e]">
            AYSRH Project
          </h1> 
          <h3 className="text-[28px] text-[#333333] leading-tight ">
            Supported by iCog-ACC in partnership with YMCA Ethiopia and MeSY 
            movement will be conducting a six month acceleration program. This
            program will be targeting youth led or owned startups working on 
            adolescents and youth sexual reproductive health.
          </h3>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start  mt-14">
        <button className="bg-[#168c9e] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
        onClick={e=>router.push('/accelerator#accelerator-program')}
        >
          <p className='text-lg'>Apply Here</p>
          <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
        </button>
       </div>
      </div>
      <div className='relative h-auto w-auto hidden lg:block'>
        <Image layout='fill' objectFit='contain' alt='' src="/sextualHealthUp.png"/>
      </div>
      </div>
    </div>
  );
}

export default Banner;
