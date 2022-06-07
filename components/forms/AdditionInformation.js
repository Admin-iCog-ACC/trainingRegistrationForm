import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';

function AdditionInformation() {
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
        <label className="label-style">
          Is your product accessible for people with disabilities?
        </label>
        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['accesibleToDisabledPeople']?.value || ''}
            name="accesibleToDisabledPeople"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['accesibleToDisabledPeople']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          How do you keep track of your customer base?
        </label>
        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['trackingCustomerBase']?.value || ''}
            name="trackingCustomerBase"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['trackingCustomerBase']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Exit Strategy</label>
        <p className="text-xs text-gray-400">
          how do you plan to go forth after concluding this acceleration program
        </p>
        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['exitStrategy']?.value || ''}
            name="exitStrategy"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['exitStrategy']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          What other unique features for your product or service are you working
          on?
        </label>

        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['otherUniqueFeatures']?.value || ''}
            name="otherUniqueFeatures"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['otherUniqueFeatures']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          How do you plan to grow your startup?
        </label>

        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['planToGrow']?.value || ''}
            name="planToGrow"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">{userData['planToGrow']?.error}</p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          How do you plan to create a brand with your product or service?
        </label>

        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['planToCreateBrand']?.value || ''}
            name="planToCreateBrand"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['planToCreateBrand']?.error}
        </p>
      </div>
    </div>
  );
}

export default AdditionInformation;
