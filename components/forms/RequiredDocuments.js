import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

function RequiredDocuments() {
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
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Motivational Video URL :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            type="url"
            onChange={handleChange}
            value={userData['motivationVideoUrl']?.value || ''}
            name="motivationVideoUrl"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['motivationVideoUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Link to Website/Mobile Application of the startup :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            type="url"
            onChange={handleChange}
            value={userData['linkToApplication']?.value || ''}
            name="linkToApplication"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['linkToApplication']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Pitch Deck Doc. URL :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            type="url"
            onChange={handleChange}
            value={userData['pitchDeckUrl']?.value || ''}
            name="pitchDeckUrl"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['pitchDeckUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Business Canvas Doc. URL :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            type="url"
            onChange={handleChange}
            value={userData['businessCanvasUrl']?.value || ''}
            name="businessCanvasUrl"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['businessCanvasUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Organizational Structure Doc. URL :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            type="url"
            onChange={handleChange}
            value={userData['organizationalStructureUrl']?.value || ''}
            name="organizationalStructureUrl"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['organizationalStructureUrl']?.error}
        </p>
      </div>
    </div>
  );
}

export default RequiredDocuments;
