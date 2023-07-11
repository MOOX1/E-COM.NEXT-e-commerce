interface MainTextProps {
  selectedOption?: string;
  placeholder?: string;
  textCenter?: boolean;
}

export default function MainText({
  placeholder,
  selectedOption,
  textCenter,
}: MainTextProps) {
  return (
    <span
      className={
        'block w-full  overflow-hidden text-ellipsis whitespace-nowrap pl-1  font-alt text-sm text-mainBlue opacity-80 ' +
        (selectedOption && ' !text-white !opacity-100 ') +
        (textCenter && ' !text-center')
      }
    >
      {selectedOption ? selectedOption : placeholder}
    </span>
  );
}
