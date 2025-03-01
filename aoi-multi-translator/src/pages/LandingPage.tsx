import React from 'react';
import Aurora from '../components/Aurora';
import StarButton from '../components/StarButton';

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

      {/* Üst Katman */}
      <div className="h-screen w-screen flex flex-col justify-center items-center z-10">
        <div className='text-white text-4xl font-bold absolute top-4 left-4'>
            <a href="/">AOI</a>
        </div>
                <div className=' text-white text-4xl font-bold top-30 absolute'>  
                    MULTILINGUAL TRANSLATOR
                    </div>
                    <div className="flex p-12 space-x-4 justify-center border border-[#ffffff25] rounded-[12px] backdrop-blur-[6px] bg-[#ffffff11]">                        
                            <a href="/translator" className="text-[17px] px-[35px] py-[12px] text-white border-[3px] border-[#ffffff25] rounded-[8px] backdrop-blur-[6px] bg-[#ffffff11] hover:shadow-[0_0_25px_rgba(255,255,140,0.3)] transition-all">Learn More</a>
                            <StarButton />
                </div>
      </div>
    </div>
  );
}

export default LandingPage;
