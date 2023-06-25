import { ReactNode } from 'react';

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  className?: string;
  label: string | ReactNode;
  onClick?: () => void;
}

export default function Button({
  ariaLabel,
  className,
  type,
  label,
  onClick,
}: IButtonProps) {
  return (
    <button
      type={type}
      className={
        'mb-2 w-full rounded bg-mainBlue p-1 font-sans  text-black transition-colors hover:bg-blue-200 ' +
        className
      }
      onClick={onClick}
      aria-label={ariaLabel}
      name={label as string}
    >
      {label}
    </button>
  );
}
