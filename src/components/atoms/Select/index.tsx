'use client';

import React, { useEffect, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import Options from './Options';
import Error from './Error';
import Icon from './Icon';
import MainText from './MainTitle';
import { ICustomSelectProps, IOption, TFormValues } from './types';

const CustomSelect = ({
  controlForm,
  error,
  options,
  placeholder,
  SelectedLayout2,
  textCenter,
}: ICustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<IOption | undefined>(
    undefined,
  );
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const { field } = useController(controlForm as UseControllerProps<TFormValues>);

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);
    setIsOptionsOpen(false);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    if (selectedOption) field.onChange(selectedOption.value as string);
  }, [field, selectedOption]);

  return (
    <div className="w-full">
      <div
        className={
          'relative  w-full cursor-pointer border-b-[1px] border-mainBlue bg-transparent py-1 font-sans  text-xs font-normal text-white placeholder:font-alt placeholder:text-xs placeholder:text-mainBlue placeholder:opacity-50 focus-visible:outline-0 ' +
          (SelectedLayout2 && 'rounded !border-0 !bg-strongBlue py-2 pr-5 text-base')
        }
        onClick={toggleOptions}
      >
        <Icon isOptionsOpen={isOptionsOpen} />
        <MainText
          placeholder={placeholder}
          textCenter={textCenter}
          selectedOption={selectedOption?.label}
        />

        <Options
          options={options}
          handleOptionClick={handleOptionClick}
          isOptionsOpen={isOptionsOpen}
        />
      </div>
      <Error error={error} />
    </div>
  );
};

export default CustomSelect;
