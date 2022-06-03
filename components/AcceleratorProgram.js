import React from 'react';
import Tabs from './Tabs';

function AcceleratorProgram() {
  return (
    <div className=" gap-7 flex flex-col items-center my-20">
      <div className="space-y-2 flex flex-col items-center">
        <p className="text-xs text-blue-400">ACCELERATOR</p>
        <h2 className="text-3xl">Accelerator Program</h2>
      </div>
      <Tabs />
    </div>
  );
}

export default AcceleratorProgram;
