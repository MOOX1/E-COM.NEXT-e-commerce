'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const CustomSelect = () => {
  const options = [
    { value: 'Admin Super', label: 'Admin Super' },
    { value: 'Viewer', label: 'Viewer' },
    { value: 'Admin Simple', label: 'Admin Simple' }
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    setSelectedOption(optionValue);
    setIsOptionsOpen(false);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className="w-full">
      <div
        className={
          'focus-visible:outline-0  bg-transparent border-b-[1px] border-mainBlue w-full placeholder:text-mainBlue py-1 placeholder:font-alt  placeholder:opacity-50 placeholder:text-xs text-white font-sans font-normal text-xs relative cursor-pointer '
        }
        onClick={toggleOptions}
      >
        <div className="absolute right-0 duration-100">
          {!isOptionsOpen ? (
            <ChevronDown className="text-white" />
          ) : (
            <ChevronUp className="text-white" />
          )}
        </div>
        <span
          className={
            'text-mainBlue opacity-50 font-alt text-sm w-full max-w-min whitespace-nowrap overflow-hidden text-ellipsis block pl-1' +
            (selectedOption && ' !opacity-100 !text-white')
          }
        >
          {selectedOption ? selectedOption : 'Nivel de acesso'}
        </span>
        <ul
          className={
            !isOptionsOpen
              ? 'hidden'
              : 'absolute  bg-strongBlue top-full border border-mainBlue/20 h-auto w-full rounded-b'
          }
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={
                'px-5 whitespace-nowrap py-2 cursor-pointer hover:bg-mainBlue/10'
              }
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
