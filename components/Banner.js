import { BsArrowRight } from 'react-icons/bs';
import {useRouter} from 'next/router';
function Banner() {
  const router = useRouter()
  return (
    <div className="max-w-[700px] lg:max-w-5xl mx-auto mb-20 ">
      <div className="flex flex-wrap">
        <div className="w-3/5">
          <h1 className="text-[50px] font-bold text-[#168c9e]">
            AYSRH Project
          </h1>
          <h3 className="text-[26px] text-[#333333] leading-tight">
            Supported by iCog-ACC in partnership with YMCA Ethiopia and MeSY 
            movement will be conducting a six month acceleration program. This
            program will be targeting youth led or owned startups working on 
            adolescents and youth sexual reproductive health.
          </h3>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start  mt-10">
        <button className="bg-[#168c9e] w-40 py-2.5 text-white rounded-[4px] flex justify-center items-center space-x-2 group"
        onClick={e=>router.push('/accelerator#accelerator-program')}
        >
          <p>Apply Here</p>
          <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
        </button>
      </div>
    </div>
  );
}

export default Banner;
