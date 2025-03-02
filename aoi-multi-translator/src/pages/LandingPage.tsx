import React from 'react';
import Aurora from '../components/Aurora';
import StarButton from '../components/StarButton';
import MltrText from '../assets/mltr_text.svg';
import O from '../assets/o.svg';

function LandingPage() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Aurora Arka Planı */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
        <Aurora
          colorStops={["#ff00ae", "#000000", "#0abdc6"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 bg-[#1e1e1e30] fixed top-0 left-0 z-20 border-b border-[#ffffff25]">
        <div className='text-white text-2xl md:text-4xl font-bold'>
          <a href="/">AOI <img src={MltrText} alt="Multilingual Translator" /></a>
        </div>
        <div>
          <a href="/translator" className="text-sm md:text-[17px] px-4 md:px-[35px] py-2 md:py-[12px] text-white border-[3px] border-[#ffffff25] rounded-[8px] backdrop-blur-[6px] bg-[#ffffff11] hover:shadow-[0_0_25px_rgba(255,255,140,0.3)] transition-all">Learn More</a>
        </div>
      </div>

      {/* Üst Katman */}
      <div className="h-screen w-screen flex flex-col justify-center items-center z-10">
        <div className='absolute top-1/4 transform -translate-y-1/2 flex flex-col items-center'>
          {/* <img src={O} alt="" className="w-12 md:w-24 m-7" /> */}
          <img src={MltrText} alt="AOI Multilingual Translator by nowy" className="w-64 md:w-[500px]" />
        </div>
        {/* <div className="flex p-4 md:p-12 space-x-2 md:space-x-4 justify-center border border-[#ffffff25] rounded-[12px] backdrop-blur-[6px] bg-[#ffffff11]"> */}
          <StarButton />
        {/* </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
