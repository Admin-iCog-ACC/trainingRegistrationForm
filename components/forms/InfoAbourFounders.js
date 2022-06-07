import { useState, useEffect } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

function InfoAboutFounders() {
  const [founderInfos, setFounderInfos] = useState([
    { fullName: '', age: 15, gender: '' },
  ]);

  const { userData, setUserData } = useStepperContext();
  const inputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...founderInfos];
    list[index][name] = value;
    setFounderInfos(list);
    const validated = founderInfos.every(
      (info) =>
        info.fullName.length > 1 &&
       (info.age >= 15 ||
        info.age <= 35) &&
        info.gender !== ''
    );
    const filteredFounders = userData['founders']?.filter(
      (info) =>
        info.fullName.length > 1 &&
        (info.age >= 15 ||
        info.age <= 35) &&
        info.gender !== ''
    );
    setUserData({ ...userData, founders: filteredFounders ?? [] });
    if (validated) {
      setUserData({ ...userData, founders: founderInfos });
    }
  };

  const addToList = () => {
    setFounderInfos([...founderInfos, { fullName: '', age: 15, gender: '' }]);
  };

  const removeFromList = (index) => {
    const list = [...founderInfos];
    list.splice(index, 1);
    setFounderInfos(list);
  };

  return (
    <div className="text-xs space-y-5 ">
      <div className="space-x-1  flex justify-between">
        <label className="label-style">
          {' '}
          FOUNDER/CO FOUNDERS NAME, AGE & GENDER : *{' '}
        </label>
        <button className="px-2 rounded bg-blue-600" onClick={addToList}>
          Add
        </button>
      </div>
      {founderInfos?.map((x, index) => {
        return (
          <div className="flex flex-wrap  gap-2 space-x-3" key={index}>
            <div>
              <label>Full Name: </label>
              <input
                required
                type="text"
                name="fullName"
                className="appearance-none p-1 px-2 w-32 rounded border border-gray-300  text-gray-800 outline-none"
                value={x.fullName}
                onChange={(e) => inputChange(e, index)}
              />
            </div>
            <div>
              <label>Age: </label>

              <input
                required
                type="number"
                name="age"
                min={15}
                max={35}
                className="appearance-none p-1 px-2 w-14 rounded border border-gray-300  text-gray-800 outline-none"
                value={x.age}
                onChange={(e) => inputChange(e, index)}
              />
            </div>
            <div>
              <label>Gender: </label>
              <select
                required
                className="p-2 outline-none border border-gray-300 bg-white rounded"
                value={x.gender}
                name="gender"
                onChange={(e) => inputChange(e, index)}
              >
                <option value="">- Select -</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            {founderInfos.length > 1 && (
              <button
                className="bg-red-500 px-2 text-lg text-white rounded"
                onClick={() => removeFromList(index)}
              >
                X
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default InfoAboutFounders;
