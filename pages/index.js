import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Register from "../components/Register";
import React from "react";
import { RecoilRoot } from "recoil";

function Home() {
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <div>
        <Register/>
      </div>
    

      <Footer />
    </div>
  );
}

export default Home;
