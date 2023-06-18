'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';

type FormValues = {
  Nome: string;
};
interface CustomSelectProps {
  controlForm: UseControllerProps<FormValues>;
  error?: string;
}

const CustomSelect = ({ controlForm, error }: CustomSelectProps) => {
  const options = [
    { value: 'Admin Super', label: 'Admin Super' },
    { value: 'Viewer', label: 'Viewer' },
    { value: 'Admin Simple', label: 'Admin Simple' }
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const { field } = useController(controlForm);

  const handleOptionClick = (optionValue: string) => {
    setSelectedOption(optionValue);
    setIsOptionsOpen(false);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    field.onChange(selectedOption);
  }, [field, selectedOption]);

  return (
    <div className="w-full">
      <div
        className={
          'relative  w-full cursor-pointer border-b-[1px] border-mainBlue bg-transparent py-1 font-sans  text-xs font-normal text-white placeholder:font-alt placeholder:text-xs placeholder:text-mainBlue placeholder:opacity-50 focus-visible:outline-0 '
        }
        onClick={toggleOptions}
      >
        <div className="absolute right-0 duration-100">
          {!isOptionsOpen ? (
            <ChevronDown className="h-auto w-5 text-white" />
          ) : (
            <ChevronUp className="h-auto w-5 text-white" />
          )}
        </div>
        <span
          className={
            'block w-full max-w-min overflow-hidden text-ellipsis whitespace-nowrap pl-1 font-alt text-sm text-mainBlue opacity-50' +
            (selectedOption && ' !text-white !opacity-100')
          }
        >
          {selectedOption ? selectedOption : 'Nivel de acesso'}
        </span>
        <ul
          className={
            !isOptionsOpen
              ? 'hidden'
              : 'absolute  top-full h-auto w-full rounded-b border border-mainBlue/20 bg-strongBlue'
          }
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={
                'cursor-pointer whitespace-nowrap px-5 py-2 hover:bg-mainBlue/10'
              }
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      {error && (
        <p className="w-full py-1 text-left font-sans text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
