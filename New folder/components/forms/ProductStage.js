import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import Required from './Required';

function ProductStage() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: { value, required, error: required && !value ? 'error' : null },
    });
  };
  return (
    <div className="flex flex-col space-y-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2 flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Current Status of your Product(s) :
          </label>
          <Required />
          <select
            required
            name="statusOfProduct"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>POC(Idea Stage)</option>
            <option>MVP</option>
            <option>Alpha Testing</option>
            <option>Beta Testing</option>
            <option>Second Release</option>
            <option>Released</option>
          </select>
        </div>
        <div className="mx-2 flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase text-black">
            Is your Product Registered as a Business :
          </label>
          <Required />
          <select
            required
            name="productRegisteredBusiness"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2 flex-1">
          <label
            htmlFor="qq"
            className="mt-3 h-6 text-xs font-bold uppercase  text-black"
          >
            Establishment Date :
          </label>
          <Required />
          <select
            required
            name="establishmentDate"
            id="qq"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Less than 1 year</option>
            <option>1 - 3 years</option>
            <option>3 - 5 years</option>
            <option>More than 5 years</option>
          </select>
        </div>
        <div className="mx-2 flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase text-black">
            Do you have a Website for your Startup :
          </label>
          <select
            name="websiteForStartup"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2  flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Do you have a Mobile Application for your Startup :
          </label>
          <select
            name="applicationForStartup"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
            focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="mx-2  flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Do you Use Online Marketing for your Startup :
          </label>
          <select
            name="onlineMarketing"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
            focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Considerable amount of usage</option>
            <option>Little usage</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2 w-full flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Do you have Social-Media for your Startup :
          </label>
          <select
            name="socialMedia"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>TikTok</option>
            <option>YouTube</option>
          </select>
        </div>
        <div className="mx-2 w-full flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Social Media Presence :
          </label>
          <select
            name="socialMediaPresence"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Mega (1M or more followers)</option>
            <option>Macro (100k - 1M followers)</option>
            <option>Micro (10k - 100k followers)</option>
            <option>Nano (1k - 10k followers)</option>
          </select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Do you have Future Plans of Expanding into Different Market Segments?
          :
        </label>
        <Required />
        <select
          required
          name="futurePlanOfExpanding"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>
  );
}

export default ProductStage;
