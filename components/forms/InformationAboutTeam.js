import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import Required from './Required';

function InformationAboutTeam() {
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
            Have you previously participated in an accelerator :
          </label>
          <Required />
          <p className="text-xs text-gray-400">
            You or any of your co-founders
          </p>
          <select
            required
            name="previouslyParticipated"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="mx-2 flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase text-black">
            Number of Co-founders :
          </label>
          <Required />
          <select
            required
            name="numberOfCofounders"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>One</option>
            <option>Two</option>
            <option>3 - 5</option>
            <option>6 or 7</option>
            <option>More than 7</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2 flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Expertise in the field of Sexual Reproductive Health (SRH) and
            related filed :
          </label>
          <select
            name="expertiseInSRH"
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
            What is your equity share in the startup?
          </label>
          <Required />
          <select
            required
            name="equityShare"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
            focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Less than 25 percent</option>
            <option>25 - 50 percent</option>
            <option>50 - 75 percent</option>
            <option>More than 75 percent</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mx-2  flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            Do you have another occupation outside your startup :
          </label>
          <Required />
          <p className="text-xs text-gray-400">
            Would you be willing to leave your job to commit full time
          </p>
          <select
            required
            name="otherOccupation"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
            focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="mx-2 w-full flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
            What is the time commitment of founders in the startup?
          </label>
          <Required />
          <select
            required
            name="timeCommitment"
            onChange={handleChange}
            className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value>- Select -</option>
            <option>Fulltime</option>
            <option>Part-time</option>
          </select>
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Willingness of relocate to iCog-ACC’s office to work :
        </label>
        <Required />
        <p className="text-xs text-gray-400">
          Would you be willing to leave your job to commit full time
        </p>
        <select
          required
          name="willingnesssToRelocate"
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

export default InformationAboutTeam;
