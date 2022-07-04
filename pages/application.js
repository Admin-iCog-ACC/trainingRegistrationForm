import { useEffect, useState } from 'react';
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import PersonalAndContactInformation from '../components/forms/PersonalAndContactInformation';
import ProductInformation from '../components/forms/Product _Information';
import ProductStage from '../components/forms/ProductStage';
import AdditionInformation from '../components/forms/AdditionInformation';
import InformationAboutTeam from '../components/forms/InformationAboutTeam';
import RequiredDocuments from '../components/forms/RequiredDocuments';
import Final from '../components/steps/Final';
import Nav from '../components/Nav';
import { verifyJwt } from '../utils/verifyJwt';
import { UseContextProvider } from '../contexts/StepperContext';
import { useQuery } from 'react-query';
import { getApplication } from '../utils/sendAuthRequest';
import { useRouter } from 'next/router';


function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const { isLoading, isFetching, data, error } = useQuery(
    'application',
    getApplication
  );
  const router = useRouter();

  const steps = [
    'Personal and Contact Info',
    'Product Info',
    'Product Stage',
    'Additional Info',
    'Info About Team',
    'Required Docs',
    'Done',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalAndContactInformation data={data} />;
      case 2:
        return <ProductInformation />;
      case 3:
        return <ProductStage />;
      case 4:
        return <AdditionInformation />;
      case 5:
        return <InformationAboutTeam />;
      case 6:
        return <RequiredDocuments />;
      case 7:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  if (isLoading || isFetching) {
    <div className=" w-full flex justify-center items-center text-black">
      Loading...
    </div>;
  }

  return (
    <UseContextProvider>
      <div className="bg-[#f6f9ff] ">
        <Nav />
        <div className="bg-[#f6f9ff]  flex items-center">
          <div className="lg:w-3/5 mx-0 md:mx-auto w-full md:w-4/5 rounded-2xl bg-white pb-2 shadow-xl font-raleway">
            {data?.filled === true && (
              <div className="flex flex-col items-center h-96 justify-center">
                <div className="wrapper">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>

                <div className="text-lg font-semibold text-gray-500">
                  You have already submitted your application.
                </div>
                <a className="mt-10">
                  <button
                    onClick={()=>router.push("/")}
                    className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
                  >
                    Go Home
                  </button>
                </a>
              </div>
            )}
            {(data?.filled === false || !data?.filled || error) && (
              <>
                <div className="w-full">
                  <Stepper steps={steps} currentStep={currentStep} />

                  <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
                </div>

                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </UseContextProvider>
  );
}

export default Application;

export function getServerSideProps({ req, res }) {
  const { cookies } = req;
  const jwt = cookies.jwt;
  if (jwt) {
    try {
      verifyJwt(jwt, '12EUDISVBS7DGV8734H39EWNNCUS');
      return {
        props: {},
      };
    } catch (error) {
      return {
        props: {},
        redirect: {
          destination: '/login',
        },
      };
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/login',
      },
    };
  }
}
