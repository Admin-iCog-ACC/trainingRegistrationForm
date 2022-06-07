import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import Required from './Required';

function ProductInformation() {
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
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          Describe your Primary Product/Service :
        </label>
        <Required />
        <p className="text-xs text-gray-400">60 characters or less</p>

        <div className="input-div-style">
          <textarea
            required
            onChange={handleChange}
            rows={2}
            maxLength={60}
            value={userData['describePrimaryProductService']?.value || ''}
            name="describePrimaryProductService"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['describePrimaryProductService']?.error}
        </p>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          What is Unique About your Product/Service? :
        </label>
        <Required />
        <p className="text-xs text-gray-400">Competitive advantage</p>

        <div className="input-div-style">
          <textarea
            required
            onChange={handleChange}
            rows={2}
            value={userData['uniqueProductService']?.value || ''}
            name="uniqueProductService"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">
          {userData['uniqueProductService']?.error}
        </p>
      </div>

      <SrhSelectComponent />
      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          What are your Target Markets/Customers :
        </label>
        <select
          name="targetMarketCustomer"
          value={userData['targetMarketCustomer']?.value || ''}
          onChange={handleChange}
          className="select-style"
        >
          <option>- Select -</option>
          <option>Adolescents</option>
          <option>Youth</option>
          <option>Above 30 years old</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Who are your Competitors :</label>
        <div className="input-div-style">
          <input
            onChange={handleChange}
            value={userData['competitors']?.value || ''}
            name="competitors"
            type="text"
            className="input-style"
          />
        </div>
        <p className="text-xs text-red-500">{userData['competitors']?.error}</p>
      </div>

      <div className="mx-2 w-full flex-1">
        <label className="label-style">
          Is your Product a Large Scale Type :
        </label>
        <p className="text-xs text-gray-400">
          Can your product or service be mass-produced or provided at a larger
          scale without compromising quality, profit and logistics
        </p>

        <select
          name="productLargeScale"
          value={userData['productLargeScale']?.value || ''}
          onChange={handleChange}
          className="select-style"
        >
          <option>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">How is the Startup Financed :</label>
        <Required />
        <select
          required
          value={userData['startupFinance']?.value || ''}
          name="startupFinance"
          onChange={handleChange}
          className="select-style"
        >
          <option>- Select -</option>
          <option>Self-sponsored</option>
          <option>Family sponsored</option>
          <option>Equity Financing</option>
          <option>Debt Financing</option>
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="label-style">Your Product Amount of Revenue :</label>
        <Required />
        <select
          required
          value={userData['productAmountRevenue']?.value || ''}
          name="productAmountRevenue"
          onChange={handleChange}
          className="select-style"
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
        <label className="label-style">
          Is your Product Sexual Reproductive Health (SRH) or Health Related :
        </label>
        <select
          value={userData['healthRelated']?.value || ''}
          name="healthRelated"
          onChange={handleChange}
          className="select-style"
        >
          <option>- Select -</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {userData['healthRelated']?.value.toLowerCase() === 'yes' ? (
        <div className="mx-2 w-full flex-1">
          <label className="label-style">More Description :</label>

          <div className="input-div-style">
            <textarea
              onChange={handleChange}
              rows={3}
              maxLength={60}
              value={userData['YesMoreDescription']?.value || ''}
              name="YesMoreDescription"
              className="input-style"
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
