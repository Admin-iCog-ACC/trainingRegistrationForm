import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import Required from './Required';

function ProductStage() {
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
      <div className="grid-style">
        <div className="mx-2 flex-1">
          <label className="label-style">
            Current Status of your Product(s) :
          </label>
          <Required />
          <select
            required
            value={userData['statusOfProduct']?.value || ''}
            name="statusOfProduct"
            onChange={handleChange}
            className="select-style"
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
          <label className="label-style">
            Is your Product Registered as a Business :
          </label>
          <Required />
          <select
            required
            name="productRegisteredBusiness"
            value={userData['productRegisteredBusiness']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="grid-style">
        <div className="mx-2 flex-1">
          <label className="label-style">Establishment Date :</label>
          <Required />
          <select
            required
            value={userData['establishmentDate']?.value || ''}
            name="establishmentDate"
            onChange={handleChange}
            className="select-style"
          >
            <option value>- Select -</option>
            <option>Less than 1 year</option>
            <option>1 - 3 years</option>
            <option>3 - 5 years</option>
            <option>More than 5 years</option>
          </select>
        </div>
        <div className="mx-2 flex-1">
          <label className="label-style">
            Do you have a Website for your Startup :
          </label>
          <select
            name="websiteForStartup"
            onChange={handleChange}
            value={userData['websiteForStartup']?.value || ''}
            className="select-style"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="grid-style">
        <div className="mx-2  flex-1">
          <label className="label-style">
            Do you have a Mobile Application for your Startup :
          </label>
          <select
            name="applicationForStartup"
            value={userData['applicationForStartup']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value>- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="mx-2  flex-1">
          <label className="label-style">
            Do you Use Online Marketing for your Startup :
          </label>
          <select
            name="onlineMarketing"
            onChange={handleChange}
            value={userData['onlineMarketing']?.value || ''}
            className="select-style"
          >
            <option value>- Select -</option>
            <option>Considerable amount of usage</option>
            <option>Little usage</option>
          </select>
        </div>
      </div>

      <div className="grid-style">
        <div className="mx-2 w-full flex-1">
          <label className="label-style">
            Do you have Social-Media for your Startup :
          </label>
          <select
            name="socialMedia"
            value={userData['socialMedia']?.value || ''}
            onChange={handleChange}
            className="select-style"
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
          <label className="label-style">Social Media Presence :</label>
          <select
            name="socialMediaPresence"
            value={userData['socialMediaPresence']?.value || ''}
            onChange={handleChange}
            className="select-style"
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
        <label className="label-style">
          Do you have Future Plans of Expanding into Different Market Segments?
          :
        </label>
        <Required />
        <select
          required
          name="futurePlanOfExpanding"
          value={userData['futurePlanOfExpanding']?.value || ''}
          onChange={handleChange}
          className="select-style"
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
