import {useState} from 'react'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
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

function Application() {
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
        <Nav/>
        <div className='bg-[#f6f9ff] h-screen flex items-center'>
        <div className="lg:w-3/5 mx-auto md:w-4/5 rounded-2xl bg-white pb-2 shadow-xl font-raleway">
          {/* Stepper */}
          <div className="horizontal container  ">
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
    </div>
    </UseContextProvider>
  )
}

export default Application

export function getServerSideProps({ req, res }) {
    const { cookies } = req;
    const jwt = cookies.jwt;
    if (jwt) {
      try {
        verifyJwt(jwt, process.env.SECRET_KEY);
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