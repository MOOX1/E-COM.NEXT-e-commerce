import { ChevronDown, ChevronUp } from 'lucide-react';

interface IIconProps {
  isOptionsOpen: boolean;
}

export default function Icon({ isOptionsOpen }: IIconProps) {
  return (
    <div className="absolute right-1 duration-100">
      {!isOptionsOpen ? (
        <ChevronDown className="h-auto w-5 text-mediaBlue" />
      ) : (
        <ChevronUp className="h-auto w-5 text-mediaBlue" />
      )}
    </div>
  );
}
