import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import InfoAboutFounders from './InfoAbourFounders';
import Required from './Required';

function PersonalAndContactInformation() {
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
    <div className="flex flex-col ">
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3 flex-1">
        <label className="label-style">Email :</label>
        <Required />
        <p className="text-xs text-gray-400">
          We will be using this email as a primary mode of contact
        </p>
        <div className="input-div-style">
          <input
            required
            onChange={handleChange}
            value={userData['email']?.value || ''}
            name="email"
            type="email"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">{userData['email']?.error}</p>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">Phone Number :</label>
        <Required />
        <p className="text-xs text-gray-400">
          Please include your country code
        </p>
        <div className="input-div-style">
          <input
            required
            onChange={handleChange}
            value={userData['phoneNumber']?.value || ''}
            name="phoneNumber"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">{userData['phoneNumber']?.error}</p>
      </div>
      <div className="mx-2 mt-3 w-full flex-1">
        <InfoAboutFounders />
      </div>
    </div>
  );
}

export default PersonalAndContactInformation;
