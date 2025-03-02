import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

function InputTextBox() {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('text-lg');

  useEffect(() => {
    if (text.length > 100) {
      setFontSize('text-lg');
    } else {
      setFontSize('text-2xl');
    }
  }, [text]);

  return (
    <div className="flex flex-col justify-end items-start border-[#ffffff54] border-2 rounded-md w-full h-full flex-grow">
      <div className="w-full p-5 relative">
        <div className="relative">
          <select name="inputLang" className="appearance-none font-medium text-white border border-[#ffffff54] p-1 pl-3 rounded-md w-full">
            <option className="bg-gray-700 font-medium" value="">Select Language</option>
            <option className="bg-gray-700 font-medium" value="tr">Turkce</option>
            <option className="bg-gray-700 font-medium" value="jp">Japan</option>
            <option className="bg-gray-700 font-medium" value="en">English</option>
          </select>
          <FaAngleDown className="absolute text-white right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <div className="bg-[#ffffff54] w-full h-0.5" />
      <textarea
        placeholder="What do you want to say?"
        className={`focus:outline-0 custom-scrollbar w-full h-64 p-3 text-white font-medium resize-none ${fontSize}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
}

export default InputTextBox;
