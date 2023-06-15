interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  className?: string;
  label: string;
}

export default function Button({
  ariaLabel,
  className,
  type,
  label
}: ButtonProps) {
  return (
    <button
      type={type}
      className={
        'bg-mainBlue text-black rounded transition-colors hover:bg-blue-200 p-1  w-full font-sans mb-2 ' +
        className
      }
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}
