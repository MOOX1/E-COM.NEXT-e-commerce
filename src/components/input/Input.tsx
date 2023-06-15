'use client';

import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface InputProps<> {
  useFormRegister?: UseFormReturn['register'];
  onChange?: (value: string) => void;
  ariaLabel?: string;
  placeholder?: string;
  type: string;
  styleOffButton?: 'primary' | 'secund';
  icon?: ReactNode;
}

export default function Input({
  useFormRegister,
  onChange,
  type,
  ariaLabel,
  placeholder,
  styleOffButton,
  icon
}: InputProps) {
  if (styleOffButton == 'secund') {
    return (
      <div className="w-full relative">
        <input
          className="bg-mainBlue/10 w-full h-full text-sm border-mainBlue/50 rounded-3xl border focus-visible:outline-none text-white px-2 pr-8 py-1"
          onChange={(ev) => onChange && onChange(ev.target.value)}
          aria-label={ariaLabel}
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute right-2 top-[10%]">{icon}</div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <input
        {...useFormRegister}
        onChange={(ev) => onChange && onChange(ev.target.value)}
        className="focus-visible:outline-0  bg-transparent border-b-[1px] border-mainBlue w-full placeholder:text-mainBlue py-1 placeholder:font-alt  placeholder:opacity-50 placeholder:text-sm text-white font-sans font-normal text-sm"
        aria-label={ariaLabel}
        placeholder={placeholder}
        type={type}
      />
      <div className="absolute right-0 top-[10%]">{icon}</div>
    </div>
  );
}
