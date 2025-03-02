import React from 'react'
import { useState } from 'react'
import MltrText from '../assets/mltr_text.svg'
import TextField from '../components/TextField'
import Squares from '../components/Squares'

function TranslatorPage() {

  const [inputText, setInputText] = useState('havuc');

  function handleAddInputText() {
    // Handle add input text logic here
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full flex justify-between items-center p-4 bg-[#1e1e1e30] fixed top-0 left-0 z-20 border-b border-[#ffffff25]">
        <div className='text-white text-2xl md:text-4xl font-bold'>
          <a href="/">AOI <img src={MltrText} alt="Multilingual Translator" /></a>
        </div>
        <div>
          <a href="/translator" className="text-sm md:text-[17px] px-4 md:px-[35px] py-2 md:py-[12px] text-white border-[3px] border-[#ffffff25] rounded-[8px] backdrop-blur-[6px] bg-[#ffffff11] hover:shadow-[0_0_25px_rgba(255,255,140,0.3)] transition-all">Learn More</a>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center relative pt-16">
        <div className='bg-[#1e1e1e] absolute top-0 left-0 w-full h-full -z-10'>
          <Squares 
            speed={0.01} 
            squareSize={50}
            direction='diagonal'
            borderColor='#333'
            hoverFillColor='#333'
          />
        </div>
        <div className="z-20 w-full max-w-4xl p-4">
          <TextField />
        </div>
      </div>
    </div>
  )
}

export default TranslatorPage