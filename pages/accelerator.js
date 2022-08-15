
import Footer from '../components/Footer';
import ApplicationBanner from '../components/ApplicationBanner';
import AcceleratorProgram from '../components/AcceleratorProgram';
import Nav from '../components/Nav';

export default function Accelerator() {
 

  return (
    <>
    <Nav />
    <ApplicationBanner />
    <AcceleratorProgram /> 

    {/* <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative md:h-full  md:w-auto h-96 w-full">
        <Image src="/babson.jpg" layout="fill" objectFit="cover" />
      </div>
    </div> */}
    <Footer />
    </>
    
  );
}

