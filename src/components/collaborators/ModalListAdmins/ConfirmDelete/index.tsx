import { Check, Trash, X } from 'lucide-react';
import Div from '@/components/Div';

interface ConfirmDeleteProps {
  certain: boolean;
  onClick: () => void;
  handleDeleteAdmin: () => void;
}

export default function ConfirmDelete({
  certain,
  onClick,
  handleDeleteAdmin
}: ConfirmDeleteProps) {
  return (
    <div className="w-1/6">
      {certain && (
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl bg-mainGray "
        >
          <p className="text-base text-mediaBlue">
            Tem certeza que deseja excluir este admin?
          </p>
          <div className="flex gap-2">
            <div onClick={handleDeleteAdmin}>
              <Check className=" cursor-pointer  text-green-300" />
            </div>
            <div onClick={onClick}>
              <X className=" cursor-pointer text-red-300" />
            </div>
          </div>
        </Div>
      )}
      {!certain && (
        <div onClick={onClick}>
          <Trash className="h-auto w-7 cursor-pointer text-mainBlue" />
        </div>
      )}
    </div>
  );
}
