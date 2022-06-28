import React from 'react';
import BackgroundSection from '../components/BackgroundSection';
import Banner from '../components/Banner';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import PartnersSection from '../components/PartnersSection';

function Home() {
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <Banner />
      <div className="bg-[#f6f9ff] p-10">
        <BackgroundSection />
      </div>
      <div className="w-full h-28 bg-white"></div>
      <div className="bg-[#f7f9ff] p-10">
        <ContentSection />
      </div>
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
