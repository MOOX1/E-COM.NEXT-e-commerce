import { X } from 'lucide-react';

interface IIconCloseProps {
  handleModal: () => void;
}

export const IconClose = ({ handleModal }: IIconCloseProps) => {
  return (
    <div onClick={handleModal} className="absolute right-4 top-4 cursor-pointer">
      <X className="text-white" />
    </div>
  );
};
