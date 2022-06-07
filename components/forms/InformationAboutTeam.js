import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import Required from './Required';

function InformationAboutTeam() {
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
            Have you previously participated in an accelerator :
          </label>
          <Required />
          <p className="text-xs text-gray-400">
            You or any of your co-founders
          </p>
          <select
            required
            value={userData['previouslyParticipated']?.value || ''}
            name="previouslyParticipated"
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="mx-2 flex-1">
          <label className="label-style">Number of Co-founders :</label>
          <Required />
          <select
            required
            name="numberOfCofounders"
            value={userData['numberOfCofounders']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>One</option>
            <option>Two</option>
            <option>3 - 5</option>
            <option>6 or 7</option>
            <option>More than 7</option>
          </select>
        </div>
      </div>
      <div className="grid-style">
        <div className="mx-2 flex-1">
          <label className="label-style">
            Expertise in the field of Sexual Reproductive Health (SRH) and
            related filed :
          </label>
          <select
            name="expertiseInSRH"
            value={userData['expertiseInSRH']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="mx-2  flex-1">
          <label className="label-style">
            What is your equity share in the startup?
          </label>
          <Required />
          <select
            required
            name="equityShare"
            value={userData['equityShare']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>Less than 25 percent</option>
            <option>25 - 50 percent</option>
            <option>50 - 75 percent</option>
            <option>More than 75 percent</option>
          </select>
        </div>
      </div>

      <div className="grid-style">
        <div className="mx-2  flex-1">
          <label className="label-style">
            Do you have another occupation outside your startup :
          </label>
          <Required />
          <p className="text-xs text-gray-400">
            Would you be willing to leave your job to commit full time
          </p>
          <select
            required
            name="otherOccupation"
            value={userData['otherOccupation']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="mx-2 w-full flex-1">
          <label className="label-style">
            What is the time commitment of founders in the startup?
          </label>
          <Required />
          <select
            required
            name="timeCommitment"
            value={userData['timeCommitment']?.value || ''}
            onChange={handleChange}
            className="select-style"
          >
            <option value="">- Select -</option>
            <option>Fulltime</option>
            <option>Part-time</option>
          </select>
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          Willingness of relocate to iCog-ACC’s office to work :
        </label>
        <Required />
        <p className="text-xs text-gray-400">
          Would you be willing to leave your job to commit full time
        </p>
        <select
          required
          value={userData['willingnesssToRelocate']?.value || ''}
          name="willingnesssToRelocate"
          onChange={handleChange}
          className="select-style"
        >
          <option value="">- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>
  );
}

export default InformationAboutTeam;
