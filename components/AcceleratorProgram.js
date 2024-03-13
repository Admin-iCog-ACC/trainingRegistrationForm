import React from 'react';
import Tabs from './Tabs';
import {useRouter} from 'next/router';

function AcceleratorProgram() {
  const router = useRouter()
  return (
    <div className=" gap-7 flex flex-col items-center my-20">
      <div className="space-y-2 flex flex-col items-center">
        <p className="text-sm font-bold text-[#168c9e]">ACCELERATOR</p>
        <h2 className="text-3xl">Accelerator Program</h2>
      </div>
      <Tabs />
      <div className="flex justify-center lg:justify-start  mt-10">
        {/* <button className="bg-[#168c9e] w-48 py-3 text-2xl  text-white rounded-[4px] flex justify-center items-center space-x-2 group"
        onClick={e=>router.push('/application')}
        >
          <p>Apply Here</p>
        </button> */}
      </div>
    </div>
  );
}

export default AcceleratorProgram;
