import { useStepperContext } from '../../contexts/StepperContext';

function AdditionInformation() {
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
          Is your product accessible for people with disabilities?
        </label>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['accesibleToDisabledPeople']?.value || ''}
            name="accesibleToDisabledPeople"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['accesibleToDisabledPeople']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          How do you keep track of your customer base?
        </label>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['trackingCustomerBase']?.value || ''}
            name="trackingCustomerBase"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['trackingCustomerBase']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          Exit Strategy
        </label>
        <p className="text-xs text-gray-400">
          how do you plan to go forth after concluding this acceleration program
        </p>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['exitStrategy']?.value || ''}
            name="exitStrategy"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['exitStrategy']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          What other unique features for your product or service are you working
          on?
        </label>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['otherUniqueFeatures']?.value || ''}
            name="otherUniqueFeatures"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['otherUniqueFeatures']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          How do you plan to grow your startup?
        </label>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['planToGrow']?.value || ''}
            name="planToGrow"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">{userData['planToGrow']?.error}</p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase  text-black">
          How do you plan to create a brand with your product or service?
        </label>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData['planToCreateBrand']?.value || ''}
            name="planToCreateBrand"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
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
