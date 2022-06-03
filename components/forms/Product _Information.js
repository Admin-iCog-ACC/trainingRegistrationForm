import { useStepperContext } from '../../contexts/StepperContext';
import Required from './Required';

function ProductInformation() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: { value, required, error: required && !value ? 'error' : null },
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          Describe your Primary Product/Service :
        </label>
        <Required />
        <p className="text-xs text-gray-400">60 characters or less</p>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <textarea
            required
            onChange={handleChange}
            rows={2}
            maxLength={60}
            value={userData['describePrimaryProductService']?.value || ''}
            name="describePrimaryProductService"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['describePrimaryProductService']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          What is Unique About your Product/Service? :
        </label>
        <Required />
        <p className="text-xs text-gray-400">Competitive advantage</p>

        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <textarea
            required
            onChange={handleChange}
            rows={2}
            value={userData['uniqueProductService']?.value || ''}
            name="uniqueProductService"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['uniqueProductService']?.error}
        </p>
      </div>

      <SrhSelectComponent />
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          What are your Target Markets/Customers :
        </label>
        <select
          name="targetMarketCustomer"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>- Select -</option>
          <option>Adolescents</option>
          <option>Youth</option>
          <option>Above 30 years old</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          Who are your Competitors :
        </label>
        <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
          <input
            required
            onChange={handleChange}
            value={userData['competitors']?.value || ''}
            name="competitors"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        <p className="text-xs text-red-500">{userData['competitors']?.error}</p>
      </div>

      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          Is your Product a Large Scale Type :
        </label>
        <p className="text-xs text-gray-400">
          Can your product or service be mass-produced or provided at a larger
          scale without compromising quality, profit and logistics
        </p>

        <select
          name="productLargeScale"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          How is the Startup Financed :
        </label>
        <Required />
        <select
          required
          name="startupFinance"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>- Select -</option>
          <option>Self-sponsored</option>
          <option>Family sponsored</option>
          <option>Equity Financing</option>
          <option>Debt Financing</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
          Your Product Amount of Revenue :
        </label>
        <Required />
        <select
          required
          name="productAmountRevenue"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>- Select -</option>
          <option>More than 25000</option>
          <option>15000 - 25000</option>
          <option>10000 - 15000</option>
          <option>5000 - 10000</option>
          <option>1000 - 5000</option>
          <option>Less than 1000</option>
        </select>
      </div>
    </div>
  );
}

export default ProductInformation;

function SrhSelectComponent() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: { value, required, error: required && !value ? 'error' : null },
    });
  };

  return (
    <div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase text-black">
          Is your Product Sexual Reproductive Health (SRH) or Health Related :
        </label>
        <select
          required
          name="HealthRelated"
          onChange={handleChange}
          className="w-full p-2 my-2 border-gray-300 rounded-lg shadow-sm
                    focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {userData['HealthRelated']?.value.toLowerCase() === 'yes' ? (
        <div className="mx-2 w-full flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-black">
            More Description :
          </label>

          <div className="my-2 flex rounded border border-gray-300 bg-white p-1">
            <textarea
              onChange={handleChange}
              rows={3}
              maxLength={60}
              value={userData['YesMoreDescription']?.value || ''}
              name="YesMoreDescription"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
          <p className="text-xs text-red-500">
            {userData['YesMoreDescription']?.error}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
