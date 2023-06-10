'use client';

import { UseFormReturn } from 'react-hook-form';

interface InputProps<> {
  useFormRegister?: UseFormReturn['register'];
  onChange?: (value: string) => void;
  ariaLabel?: string;
  placeholder?: string;
  type: string;
}

export default function Input({
  useFormRegister,
  onChange,
  type,
  ariaLabel,
  placeholder
}: InputProps) {
  return (
    <input
      {...useFormRegister}
      onChange={(ev) => onChange && onChange(ev.target.value)}
      className="focus-visible:outline-0  bg-transparent border-b-[1px] border-mainBlue w-full placeholder:text-mainBlue py-1 placeholder:font-alt  placeholder:opacity-50 placeholder:text-xs text-white font-sans font-normal text-xs mb-5"
      aria-label={ariaLabel}
      placeholder={placeholder}
      type={type}
    />
  );
}
