import { ReactNode } from 'react';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  className?: string;
  label: string | ReactNode;
}

export default function Button({
  ariaLabel,
  className,
  type,
  label
}: IButtonProps) {
  return (
    <button
      type={type}
      className={
        'mb-2 w-full rounded bg-mainBlue p-1 font-sans  text-black transition-colors hover:bg-blue-200 ' +
        className
      }
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}
