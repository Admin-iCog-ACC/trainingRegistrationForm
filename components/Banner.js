import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className="max-w-[700px] lg:max-w-5xl mx-auto mb-20 ">
      <div className="flex flex-wrap">
        <div className="w-3/5">
          <h1 className="text-[50px] font-bold text-[#168c9e]">
            AYSRH Project
          </h1>
          <h3 className="text-[26px] text-[#333333] leading-tight">
            The younger generation looks for digital platforms for information
            about their bodies, health and relationships; yet often has a hard
            time finding credible sources. This campaign is designed to
            disseminate positive AYSRH information.
          </h3>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start  mt-10">
        <button className="bg-[#168c9e] w-40 py-2.5 text-white rounded-[4px] flex justify-center items-center space-x-2 group">
          <p>Apply Here</p>
          <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
        </button>
      </div>
    </div>
  );
}

export default Banner;
