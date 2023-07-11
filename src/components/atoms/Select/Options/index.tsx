import { IOption } from '../types';

interface IOptionsProps {
  options?: IOption[];
  handleOptionClick: (optionValue: string) => void;
  isOptionsOpen: boolean;
}

export default function Options({
  options,
  handleOptionClick,
  isOptionsOpen,
}: IOptionsProps) {
  return (
    <ul
      className={
        !isOptionsOpen
          ? 'hidden'
          : 'absolute  top-full h-auto w-full rounded-b border border-mainBlue/20 bg-strongBlue'
      }
    >
      {options?.map(option => (
        <li
          key={option.value}
          className={
            'cursor-pointer whitespace-nowrap px-5 py-2 hover:bg-mainBlue/10'
          }
          onClick={() => handleOptionClick(option.value.toString())}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}
