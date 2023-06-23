'use client';

import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface IInputProps<> {
  useFormRegister?: UseFormReturn['register'];
  onChange?: (value: string) => void;
  ariaLabel?: string;
  placeholder?: string;
  type: string;
  styleOffButton?: 'primary' | 'secund';
  icon?: ReactNode;
  errors?: string;
}

export default function Input({
  useFormRegister,
  onChange,
  type,
  ariaLabel,
  placeholder,
  styleOffButton,
  icon,
  errors
}: IInputProps) {
  if (styleOffButton == 'secund') {
    return (
      <div className="relative w-full">
        <input
          className="h-full w-full rounded-3xl border border-mainBlue/50 bg-mainBlue/10 px-2 py-1 pr-8 text-sm text-white focus-visible:outline-none"
          onChange={(ev) => onChange && onChange(ev.target.value)}
          aria-label={ariaLabel}
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute right-2 top-[10%]">{icon}</div>
        {errors && (
          <p className=" w-full py-1 text-left font-sans text-xs text-red-500">
            {errors}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <input
        {...useFormRegister}
        onChange={(ev) => onChange && onChange(ev.target.value)}
        className="w-full  border-b-[1px] border-mainBlue bg-transparent py-1 font-sans text-sm font-normal  text-white placeholder:font-alt placeholder:text-sm placeholder:text-mainBlue placeholder:opacity-50 focus-visible:outline-0"
        aria-label={ariaLabel}
        placeholder={placeholder}
        type={type}
      />
      <div className="absolute right-0 top-[10%]">{icon}</div>
      {errors && (
        <p className=" w-full py-1 text-left font-sans text-xs text-red-500">
          {errors}
        </p>
      )}
    </div>
  );
}
