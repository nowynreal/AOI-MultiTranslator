import React from 'react';
import InputTextBox from './InputTextBox';

function TextField() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        <InputTextBox />
        <InputTextBox />
        <InputTextBox />
      </div>
    </div>
  );
}

export default TextField;