import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';

function RequiredDocuments() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required ? validateInputs(name, value) : null,
      },
    });
  };
  return (
    <div className="flex flex-col space-y-3 ">
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Motivational Video URL :</label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="input-div-style">
          <input
            type="url"
            onChange={handleChange}
            value={userData['motivationVideoUrl']?.value || ''}
            name="motivationVideoUrl"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['motivationVideoUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          Link to Website/Mobile Application of the startup :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>
        <div className="input-div-style">
          <input
            type="url"
            onChange={handleChange}
            value={userData['linkToApplication']?.value || ''}
            name="linkToApplication"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['linkToApplication']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Pitch Deck Doc. URL :</label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>
        <div className="input-div-style">
          <input
            type="url"
            onChange={handleChange}
            value={userData['pitchDeckUrl']?.value || ''}
            name="pitchDeckUrl"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['pitchDeckUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Business Canvas Doc. URL :</label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="input-div-style">
          <input
            type="url"
            onChange={handleChange}
            value={userData['businessCanvasUrl']?.value || ''}
            name="businessCanvasUrl"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['businessCanvasUrl']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          Organizational Structure Doc. URL :
        </label>
        <p className="text-xs text-gray-400">URL format (http://example.com)</p>

        <div className="input-div-style">
          <input
            type="url"
            onChange={handleChange}
            value={userData['organizationalStructureUrl']?.value || ''}
            name="organizationalStructureUrl"
            className="input-style"
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
