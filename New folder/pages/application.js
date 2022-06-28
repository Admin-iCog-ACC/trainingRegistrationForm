import { useState } from 'react';
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import { UseContextProvider } from '../contexts/StepperContext';

import Final from '../components/steps/Final';
import Footer from '../components/Footer';
import PersonalAndContactInformation from '../components/forms/PersonalAndContactInformation';
import ProductInformation from '../components/forms/Product _Information';
import ProductStage from '../components/forms/ProductStage';
import AdditionInformation from '../components/forms/AdditionInformation';
import InformationAboutTeam from '../components/forms/InformationAboutTeam';
import RequiredDocuments from '../components/forms/RequiredDocuments';
import { verifyJwt } from '../utils/verifyJwt';

export default function Application() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Personal and Contact Information',
    'Product Information',
    'Product Stage',
    'Additional Information',
    'Information About Team',
    'Required Documents',
    'Done',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalAndContactInformation />;
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

  return (
    <UseContextProvider>
      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/6 font-raleway">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
      <Footer />
    </UseContextProvider>
  );
}

export function getServerSideProps({ req, res }) {
  const { cookies } = req;
  const jwt = cookies.jwt;

  try {
    verifyJwt(jwt, process.env.SECRET_KEY);
    // verify(jwt, process.env.SECRET_KEY);
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
}
